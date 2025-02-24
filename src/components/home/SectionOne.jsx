import doctor3 from "../../assets/img/homeimages/section1-d3.png";
import doctor2 from "../../assets/img/homeimages/section1-d1.png"; // Adjust paths as needed
import doctor4 from "../../assets/img/homeimages/section1-d2.png";
import doctor5 from "../../assets/img/homeimages/section1-d4.png";
import overlay from "../../assets/img/homeimages/overlay.png";
import Frame from "../../assets/img/homeimages/Frame 48.png";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const SectionOne = () => {
  const { t, i18n } = useTranslation("home"); // Use 'home' namespace
  const currentLanguage = i18n.language;
  const images = [doctor2, doctor3, doctor4, doctor5]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to change image every 4 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 4000); // 4000ms = 4 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <section className="px-0  lg:px-[200px] xl:px-[350px] my-[100px] ">
      <div className="flex items-center justify-between max-sm:flex-col">
        <article className="me-4 block rounded-lg shadow-secondary-1">
          <div className="p-3">
            <div className="w-[50px] h-[50px] flex justify-center items-center gap-2.5 mb-2">
              <img src={Frame} alt="Decorative frame" />
            </div>
            <div className="w-full lg:w-[440px] self-stretch h-auto md:h-[252px] flex-col justify-start items-start gap-4 flex mt-5  ">
              <div className="flex gap-2 sm:gap-5 flex-wrap leading-3">
                <h2 className="text-[#e8604b] text-[30px] sm:text-[40px] lg:text-[50.96px] xl:text-[70.96px] font-bold font-['Segoe UI'] leading-tight md:leading-[92.25px]">
                  {t("s2-best")}
                </h2>
                <h3 className="text-[#456675] text-[30px] sm:text-[40px] lg:text-[50.96px] xl:text-[70.96px] font-bold font-['Segoe UI'] leading-tight md:leading-[92.25px]">
                  {t("s2-resources")}
                  <br />
                </h3>
                <h3 className="text-[#456675] text-[30px] sm:text-[40px] lg:text-[50.96px] xl:text-[70.96px] font-bold font-['Segoe UI'] leading-tight md:leading-[92.25px]">
                  {t("s2-technology")}
                </h3>
              </div>
              <p className="w-full lg:w-[340px]  text-neutral-600 text-base lg:text-xl font-normal font-['Segoe UI'] leading-relaxed mb-5 ">
                {t("s2-slug")}
              </p>
            </div>
          </div>
        </article>
        <figure className="rounded-lg shadow-secondary-1">
          {currentLanguage === "ar" && (
            <div className="max-w-2xl m-auto flex">
              <img
                className="w-full h-[430px] rounded-[30px] ml-[-250px] mt-2 z-10"
                src={images[currentImageIndex]}
                alt="Doctor"
              />
              <img
                className="w-full h-[450px]  rounded-[30px] z-0"
                src={overlay}
              />
            </div>
          )}
          {currentLanguage === "en" && (
            <div className="max-w-2xl m-auto flex">
              <img
                className="w-full h-[450px]  rounded-[30px] z-0"
                src={overlay}
              />
              <img
                className="w-full h-[430px] rounded-[30px] ml-[-250px] mt-2 z-10"
                src={images[currentImageIndex]}
                alt="Doctor"
              />
            </div>
          )}
        </figure>
      </div>
    </section>
  );
};

export default SectionOne;
