import docktor1 from "../../assets/img/homeimages/doctor1.png";
import afterPeng from "../../assets/img/homeimages/after.jpeg";
import mask from "../../assets/img/homeimages/mask.png";
import maskright from "../../assets/img/homeimages/maskright.png";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const slides = [
  {
    image: mask,
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
  },
  {
    image: mask,
    text: "نص توضيحي آخر يمكن أن يظهر هنا.",
  },
  {
    image: mask,
    text: "نص توضيحي ثالث، مع معلومات إضافية.",
  },
];

const HomeSectionSix = () => {
  const { t } = useTranslation("home"); // Use 'home' namespace

  const [currentSlide, setCurrentSlide] = useState(0); // Current slide index
  const [imageWidth, setImageWidth] = useState(300); // Initial width
  const imageRef = useRef(null);

  // Set default image width based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageWidth(250); // Set width to 450px on small to medium screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize width on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseDown = (e) => {
    const startX = e.clientX; // Starting point when mouse is pressed

    const handleMouseMove = (e) => {
      const movement = e.clientX - startX; // Calculate movement of the mouse
      const newWidth = imageWidth + movement; // Increase or decrease width based on mouse movement

      // Limit the width to between 100px and 700px on larger screens or 100px to 450px on small/medium screens
      const maxLimit = window.innerWidth <= 768 ? 450 : 1050;
      if (newWidth >= 20 && newWidth <= maxLimit) {
        setImageWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
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
        <figure className="hidden lg:flex basis-1/5 rounded-l-2xl overflow-hidden my-5">
          <img
            className="w-full h-full object-cover"
            src={maskright}
            alt="Before image"
            loading="lazy"
          />
          <figcaption className="sr-only">
            Image showing the result before treatment
          </figcaption>
        </figure>
        {/* Slide Container */}
        <div className="w-full lg:basis-3/5 h-[250px] md:h-[400px] relative rounded-[20px] overflow-hidden">
          <div className="h-full flex items-center justify-end bg-[url('./assets/img/homeimages/fillter.png')] bg-cover">
            <div className="h-full flex items-center justify-center">
              <label
                htmlFor="resizableImage"
                className="cursor-grabbing w-10 h-10 rounded-full bg-red-500/50 flex items-center justify-center relative ml-[-20px]"
                aria-label="Resize image"
                onMouseDown={handleMouseDown}
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

          <div className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 flex items-center gap-2">
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
            <p className="w-[272px] text-right text-[#3d3d3d] text-xs font-normal font-['Segoe UI'] leading-none">
              {slides[currentSlide].text}{" "}
              {/* Update text based on current slide */}
            </p>
          </div>
        </div>
        <figure className="hidden lg:flex basis-1/5 rounded-r-2xl overflow-hidden my-5">
          <img
            className="w-full h-full object-cover"
            src={afterPeng}
            alt="After image"
            loading="lazy"
          />
          <figcaption className="sr-only">
            Image showing the result after treatment
          </figcaption>
        </figure>
      </div>
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
    </section>
  );
};

export default HomeSectionSix;
