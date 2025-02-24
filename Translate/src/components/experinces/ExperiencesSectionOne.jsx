import { useState } from "react";
import woman from "../../assets/img/old/woman.png";
import woman2 from "../../assets/img/old/image.png";
import woman3 from "../../assets/img/old/image5.png";
import SwapperNavigationButtons from "./sectionOne/SwapperNavigationButtons";
import { useTranslation } from "react-i18next";

const ExperiencesSectionOne = () => {
  const { t } = useTranslation("experiences");
  // Array list of headers and paragraphs
  const experiences = [
    {
      header: t("header1"),
      paragraph: t("paragraph1"),
      image: woman,
    },
    {
      header: t("header2"),
      paragraph: t("paragraph2"),
      image: woman2,
    },
    {
      header: t("header3"),
      paragraph: t("paragraph3"),
      image: woman3,
    },
  ];

  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === experiences.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Function to go to the previous slide
  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? experiences.length - 1 : prevSlide - 1
    );
  };

  return (
    <section>
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <article className="w-full h-[450px] flex rounded-2xl overflow-hidden bg-[#FDE8E3]">
          <header className="w-full flex flex-col justify-between">
            <div className="w-[100px] h-[100px] mt-[-20px]">
              <div
                className="relative rounded-full p-5 bg-[#9cbbc4] flex w-[100px] h-[100px]"
                aria-hidden="true"
              ></div>
              <div
                className="relative mt-[-100px] mr-[-30px] rounded-full p-5 bg-[#fef4f2] flex w-[100px] h-[100px]"
                aria-hidden="true"
              ></div>
            </div>
            <div className="w-[383px] flex-col justify-start items-end gap-7 inline-flex mt-[-50px] px-5">
              <h1
                className="self-stretch  text-[#eb6a48] text-[64px] font-bold font-['Segoe UI'] leading-[83.20px]"
                dir="rtl"
              >
                {experiences[currentSlide].header}
              </h1>
              <p
                className="self-stretch  text-[#3d3d3d] text-xl font-normal font-['Segoe UI'] leading-relaxed"
                dir="rtl"
              >
                {experiences[currentSlide].paragraph}
              </p>
            </div>
            <div className="">
              <div className="w-[330.01px] h-[100px] flex right-[-200px] mb-[-30px]">
                <div className="w-[330.01px] h-[330.01px] rounded-full border border-[#fab5a3] "></div>
                <div className="w-[12px] h-[12px] p-2 bg-[#eb6a48] rounded-full mr-[-25px] mt-[35px]"></div>
                <div className="mr-[-50px] mt-[30px] w-[291.41px] h-[291.41px] rounded-full border-dashed border-2 border-[#fab5a3]"></div>
              </div>
            </div>
          </header>
          <div className="w-full text flex justify-end">
            <div className="bg-gradient-to-r from-white/0 to-[#FDE8E3] w-[300px] ml-[-300px] z-30"></div>
            <img
              src={experiences[currentSlide].image}
              alt="Portrait of an elderly woman"
              loading="lazy"
              className="z-0 object-cover"
            />
          </div>
        </article>
        {/* <div className="flex items-center justify-center mt-[-30px]">
          <div className="w-[300px] bg-white p-5 rounded-t-3xl flex items-center justify-between gap-5">
            <button
              onClick={handlePrev}
              className="bg-[#FAB5A3] w-[100px] rounded-2xl flex items-center justify-center text-white p-1"
              aria-label="Previous slide"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-[#F58F74] w-[100px] rounded-2xl flex items-center justify-center text-white p-1"
              aria-label="Next slide"
            >
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
          </div>
        </div> */}
        <SwapperNavigationButtons
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </section>
  );
};

export default ExperiencesSectionOne;
