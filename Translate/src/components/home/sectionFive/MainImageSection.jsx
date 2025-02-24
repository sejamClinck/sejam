import { useState, useEffect } from "react";
import soady from "../../../assets/img/homeimages/soady.png";
import womman from "../../../assets/img/homeimages/woman.png";
import useSmallScreen from "../../../hooks/useSmallScreen";
import { useTranslation } from "react-i18next";

const ImageSlider = ({ images }) => {
  const { t } = useTranslation("home"); // Use 'home' namespace

  const isSmallScreen = useSmallScreen();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Auto-advance every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <article
      className="relative w-full h-[550px] lg:w-2/3 bg-cover bg-center bg-no-repeat rounded-2xl"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="absolute w-full h-full bg-gradient-to-b from-white to-[#eb6a48] opacity-50 rounded-[20px] max-sm:rounded-[20px]"></div>
      {!isSmallScreen && (
        <div className="absolute bottom-[-10px] left-[-10px] w-[160px] h-16 p-2.5 rounded-xl bg-[#fef4f2]">
          <div className="flex items-center justify-between p-3 bg-[#FDE8E3] rounded-2xl">
            <button
              className="bg-red-500 p-3 rounded-2xl text-white"
              aria-label="Next Slide"
              onClick={nextSlide}
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
              className="bg-red-500 p-3 rounded-2xl text-white"
              aria-label="Previous Slide"
              onClick={prevSlide}
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
        </div>
      )}
      {!isSmallScreen && (
        <p className="absolute bottom-[30px] right-[30px] text-white text-[34px] font-semibold max-sm:text-[20px]">
          {t("s7-main-slug")}
        </p>
      )}
    </article>
  );
};

const MainImageSection = () => {
  const images = [soady, womman, soady];

  return <ImageSlider images={images} />;
};

export default MainImageSection;
