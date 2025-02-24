import docktor1 from "../../assets/img/homeimages/doctor1.png";
// import afterPeng from "../../assets/img/homeimages/after.jpeg";
import after1 from "../../assets/img/homeimages/after1.png";
import after2 from "../../assets/img/homeimages/after2.jpg";
import after3 from "../../assets/img/homeimages/after3.png";

import befor1 from "../../assets/img/homeimages/befor1.png";
import befor2 from "../../assets/img/homeimages/befor2.webp";
import befor3 from "../../assets/img/homeimages/befor3.png";

import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const HomeSectionSix = () => {
  const { t, i18n } = useTranslation("home"); // Use 'home' namespace
  const currentLanguage = i18n.language;
  const slides = [
    {
      image: befor1,
      fillter: after1,
      text: t("s8-text1"),
    },
    {
      image: befor2,
      fillter: after2,
      text: t("s8-text2"),
    },
    {
      image: befor3,
      fillter: after3,
      text: t("s8-text3"),
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0); // Current slide index
  const [imageWidth, setImageWidth] = useState(500); //Set Initial width to 500px on large screens
  const imageRef = useRef(null);

  // Set default image width based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageWidth(200); // Set Initial width to 200px on small to medium screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize width on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle mouse down / touch start event
  const handleStart = (e) => {
    const startX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX; // For touch, use touches array

    const handleMove = (e) => {
      const currentX =
        e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
      const movement = currentX - startX;
      const newWidth = imageWidth + movement;

      // Limit the width based on screen size
      const maxLimit = window.innerWidth <= 768 ? 400 : 1200;
      if (newWidth >= 20 && newWidth <= maxLimit) {
        setImageWidth(newWidth);
      }
    };

    const handleEnd = () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchend", handleEnd);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchend", handleEnd);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Loop back to the first slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Loop to the last slide
  };

  return (
    <section
      aria-labelledby="results-header"
      className="w-full flex flex-col items-center justify-center mt-[650px] lg:mt-[100px]"
    >
      <div className="h-[71px] p-5 justify-center items-center gap-4 inline-flex">
        {/* Left Decoration */}
        <div className="flex justify-end items-center gap-1">
          <div
            className="w-3 h-1.5 bg-[#eb6a48] rounded-full"
            aria-hidden="true"
          ></div>
          <div
            className="w-8 h-1.5 bg-[#eb6a48] rounded-full"
            aria-hidden="true"
          ></div>
        </div>
        {/* Right Decoration */}
        <h2
          id="results-header"
          className="text-[#292929] text-2xl font-semibold leading-[31.2px] font-['Segoe UI'] text-center"
        >
          {t("s8-result-befor-after")}
        </h2>
        <div className="flex justify-end items-center gap-1">
          <div
            className="w-3 h-1.5 bg-[#eb6a48] rounded-full"
            aria-hidden="true"
          ></div>
          <div
            className="w-8 h-1.5 bg-[#eb6a48] rounded-full"
            aria-hidden="true"
          ></div>
        </div>
      </div>
      <div className="w-full flex flex-row gap-5">
        {/* Slide Container */}
        <div className="w-full mx-auto lg:basis-4/5 h-[250px] md:h-[500px] relative rounded-[20px] overflow-hidden">
          {currentLanguage === "ar" && (
            <div
              className="h-full flex items-center justify-end bg-cover"
              style={{
                backgroundImage: `url(${slides[currentSlide].fillter})`,
              }}
            >
              <div className="h-full flex items-center justify-center">
                <label
                  htmlFor="resizableImage"
                  className="cursor-grabbing w-10 h-10 rounded-full bg-red-500/50 flex items-center justify-center relative ml-[-20px]"
                  aria-label="Resize image"
                  onMouseDown={handleStart}
                  onTouchStart={handleStart}
                >
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                </label>
                <div
                  draggable="false"
                  ref={imageRef}
                  id="resizableImage"
                  className="cursor-grabbing bg-cover"
                  style={{
                    width: `${imageWidth}px`,
                    height: "100%",
                    objectFit: "cover",
                    borderRight: "white solid 2px",
                    backgroundImage: `url(${slides[currentSlide].image})`, // Update background image based on current slide
                  }}
                  alt="Mask Image"
                  loading="lazy"
                ></div>
              </div>
            </div>
          )}
          {currentLanguage === "en" && (
            <div
              className="h-full flex items-center justify-start bg-cover"
              style={{
                backgroundImage: `url(${slides[currentSlide].fillter})`, // Use the correct filter image from the slides array
              }}
            >
              <div className="h-full flex items-center justify-center">
                <div
                  draggable="false"
                  ref={imageRef}
                  id="resizableImage"
                  className="cursor-grabbing bg-cover"
                  style={{
                    width: `${imageWidth}px`,
                    height: "100%",
                    objectFit: "cover",
                    borderRight: "white solid 2px",
                    backgroundImage: `url(${slides[currentSlide].image})`, // Update background image based on current slide
                  }}
                  alt="Mask Image"
                  loading="lazy"
                ></div>
                <label
                  htmlFor="resizableImage"
                  className="cursor-grabbing w-10 h-10 rounded-full bg-red-500/50 flex items-center justify-center relative ml-[-20px]"
                  aria-label="Resize image"
                  onMouseDown={handleStart}
                  onTouchStart={handleStart}
                >
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </label>
              </div>
            </div>
          )}

          <div className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-[41px] h-[41px] z-0 px-2 py-1.5 bg-[#efefef] rounded-full border border-white flex justify-center items-center">
                <div className="w-5 h-5">99</div>
              </div>
              <img
                className="w-[41px] h-[41px] z-30 rounded-full mr-[-20px]"
                src={docktor1}
                alt="Doctor"
                loading="lazy"
              />
            </div>
            <p className="w-[272px]  text-[#3d3d3d] text-xs font-normal font-['Segoe UI'] leading-none">
              {slides[currentSlide].text}{" "}
              {/* Update text based on current slide */}
            </p>
          </div>
        </div>
        {/* end slider */}
      </div>
      {currentLanguage === "ar" && (
        <div className="flex justify-between mt-5 w-[200px] px-5">
          <button
            onClick={prevSlide}
            className="bg-[#eb6a48] text-white px-4 py-2 rounded"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#eb6a48] text-white px-4 py-2 rounded"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
        </div>
      )}
      {currentLanguage === "en" && (
        <div className="flex justify-between mt-5 w-[200px] px-5">
          <button
            onClick={nextSlide}
            className="bg-[#eb6a48] text-white px-4 py-2 rounded"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
          <button
            onClick={prevSlide}
            className="bg-[#eb6a48] text-white px-4 py-2 rounded"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default HomeSectionSix;
