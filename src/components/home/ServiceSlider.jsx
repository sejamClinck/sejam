import { useState, useRef, useEffect } from "react";
import useSmallScreen from "../../hooks/useSmallScreen";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const ServiceSlider = ({ services, title }) => {
  const { t, i18n } = useTranslation("home"); // Use 'home' namespace
  const currentLanguage = i18n.language;
  const isSmallScreen = useSmallScreen();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Breakpoint for large screens
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isLargeScreen && currentIndex < services.length - 1) {
      setTranslateX((prevTranslateX) => prevTranslateX - 164); // Move one card
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (!isLargeScreen) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }
    /* 
    if the last index i want the scrolling start again form the first element on the array*/
  };

  const prevSlide = () => {
    if (isLargeScreen && currentIndex > 0) {
      setTranslateX((prevTranslateX) => prevTranslateX + 164); // Move one card back
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (!isLargeScreen) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + services.length) % services.length
      );
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider && isLargeScreen) {
      slider.style.transform = `translateX(${translateX}px)`;
    }
  }, [translateX, isLargeScreen]);

  const renderServiceCard = (service, index) => (
    <div
      className="slide p-5"
      key={index}
      style={{
        width: isLargeScreen ? "154px" : "100%",
        marginRight: isLargeScreen ? "10px" : "0",
        opacity: 1,
        transition: "opacity 0.5s ease-in-out, transform 0.3s ease-in-out",
      }}
    >
      <div className="w-full lg:w-[154px] h-[200px] p-5 bg-white rounded-[15px] border border-[#ebebeb] transition duration-500 ease-in-out transform hover:shadow-2xl hover:-translate-y-4 flex justify-center items-center gap-2.5">
        <Link to={'services'} className="w-full lg:w-[117px] flex-col justify-center items-center gap-[19px] flex">
          <div>
            <img
              src={service.imageSrc}
              alt={service.title}
              className="w-[70px] h-auto"
            />
          </div>
          <div className="h-[51px] flex-col justify-start items-center gap-3 flex">
            <div className="self-stretch text-center text-[#292929] text-[15px] font-bold leading-tight">
              {service.title}
            </div>
            <div className="self-stretch flex justify-center items-center">
              <a
                href={service.link}
                className="text-[#3d3d3d] text-[13px] flex gap-2"
              >
                <span className="text-[10px]">{t("s5-more")}</span>
                <svg
                  className="h-4 w-4 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </a>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );

  return (
    <section className="w-full h-auto p-5 lg:p-[50px] flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="bg-white w-full rounded-[20px] flex-col justify-center items-start gap-2.5 flex">
        <div className="w-full h-auto flex-col justify-start items-start gap-[41px] flex p-5 overflow-hidden">
          <div className="self-stretch px-5 justify-between items-center inline-flex">
            <div className="p-5 justify-center items-center gap-4 flex">
              <div className="w-[43px] h-[43px] bg-[#ffbead] rounded-[50px] max-sm:hidden "></div>
              <div className="mr-[-40px] max-sm:mr-[60px] text-right text-[#1e282e] text-2xl font-semibold leading-[31.20px] max-sm:mb-[-50px] max-sm:text-center max-sm:text-[20px] ">
                {title}
              </div>
            </div>
          </div>

          <div className="overflow-hidden w-full">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transition: "opacity 0.5s ease, transform 0.5s ease",
                transform: isLargeScreen
                  ? `translateX(${translateX}px)`
                  : "none",
              }}
            >
              {isLargeScreen
                ? services.map((service, index) =>
                    renderServiceCard(service, index)
                  )
                : renderServiceCard(services[currentIndex], currentIndex)}
            </div>
          </div>
          {isSmallScreen && (
            <div className="flex gap-5 justify-center items-center m-auto">
              {currentLanguage === "ar" && (
                <>
                  <button
                    onClick={prevSlide}
                    className="p-3 rounded-lg text-white bg-red-500"
                  >
                    <svg
                      className="h-6 w-6"
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
                    className="p-3 rounded-lg text-white bg-red-500"
                  >
                    <svg
                      className="h-6 w-6"
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
                </>
              )}
              {currentLanguage === "en" && (
                <>
                  <button
                    onClick={nextSlide}
                    className="p-3 rounded-lg text-white bg-red-500"
                  >
                    <svg
                      className="h-6 w-6"
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
                    className="p-3 rounded-lg text-white bg-red-500"
                  >
                    <svg
                      className="h-6 w-6"
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
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
