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
      <div className="max-w-8xl mx-auto px-5 md:px-10 ">
        <article className="w-full h-[350px] md:h-[450px] flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#FDE8E3] ">
          {/* Header Section */}
          <header className="w-full flex flex-col justify-between items-center md:items-start text-center md:">
            {/* Hide the shapes on small screens */}
            <div className="hidden md:flex w-[200px] h-[200px] mt-[-20px]">
              <div
                className="relative rounded-full p-5 bg-[#9cbbc4] flex w-[100px] h-[100px]"
                aria-hidden="true"
              ></div>
              <div
                className="relative mt-[-10px] mr-[-70px] rounded-full p-5 bg-[#fef4f2] flex w-[100px] h-[100px]"
                aria-hidden="true"
              ></div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-[383px] flex-col justify-start items-center md:items-end gap-4 inline-flex mt-5 md:mt-[-50px] px-5 max-sm:mb-[90px] max-md:mb-[112px] ">
              <h1
                className="w-full text-[#eb6a48] text-[24px] md:text-[64px] font-bold font-['Segoe UI'] leading-[32px] md:leading-[83.20px] xl:text-[40px] xl:text-start"
              >
                {experiences[currentSlide].header}
              </h1>
              <p
                className="text-start text-[#3d3d3d] text-sm md:text-xl font-normal font-['Segoe UI'] leading-snug md:leading-relaxed "
              >
                {experiences[currentSlide].paragraph}
              </p>
            </div>

            {/* Hide the bottom shape on small screens */}
            <div className="hidden md:flex">
              <div className="w-[330.01px] h-[100px] flex right-[-200px] mb-[-30px]">
                <div className="w-[330.01px] h-[330.01px] rounded-full border border-[#fab5a3]"></div>
                <div className="w-[12px] h-[12px] p-2 bg-[#eb6a48] rounded-full mr-[-25px] mt-[35px]"></div>
                <div className="mr-[-50px] mt-[30px] w-[291.41px] h-[291.41px] rounded-full border-dashed border-2 border-[#fab5a3]"></div>
              </div>
            </div>
          </header>

          {/* Image Section */}
          <div className="w-full  h-full text flex justify-center md:justify-end mt-auto overflow-hidden max-md:h-[520px]">
            {/* Image container with increased width and reduced shadow on large screens */}
            <div className="relative w-full md:w-[300px] lg:w-[550px] h-[150px] md:h-auto overflow-hidden">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-white/0 w-full md:w-[300px] lg:w-[400px] z-30"></div> */}
              <img
                src={experiences[currentSlide].image}
                alt="Portrait of an elderly woman"
                loading="lazy"
                className="z-0 object-cover w-[100%] h-[100%] shadow-md lg:shadow-sm overflow-hidden" 
              />
            </div>
          </div>
        </article>

        <SwapperNavigationButtons
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </section>
  );
};

export default ExperiencesSectionOne;
