import smile from "../../assets/img/homeimages/smile.png";
import smileWomman from "../../assets/img/homeimages/smail-weman.png";
import star1 from "../../assets/img/homeimages/Star1.png";

import { useTranslation } from "react-i18next";
const Hero = () => {
  const handleScrollToForm = () => {
    const element = document.getElementById("content-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { t } = useTranslation("home"); // Use 'home' namespace
  return (
    <section className="mr-10 max-w-[550px] p-4 z-0">
      <header className=" mt-[100px] flex flex-col space-y-4 gap-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-white text-[45px] md:text-[77px] font-bold">
            {t("s1-smile")}
          </h2>
          <img
            className="w-[100px] md:w-[160px] h-auto rounded-[323.23px]"
            src={smile}
            alt="ابتسامتك - Smile"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <img
            className="w-[100px] md:w-[160px] h-auto rounded-[323.23px]"
            src={smileWomman}
            alt="أمــــــــانتنا - Our Trust"
          />
          <h2 className="text-white text-[45px] md:text-[77px] font-bold">
            {t("s1-honer")}
          </h2>
        </div>
      </header>

      <p className="text-[#dcdcdc] text-sm md:text-xl leading-loose mt-5">
        {t("s1-slug")}
      </p>
      <div className="Frame14 w-[150px] md:w-[150px] h-[40px] p-2 bg-[#FAB5A3] rounded-full mt-5 flex justify-center items-center">
        <img className="mb-[-10px]" src={star1} alt="Star decoration" />
        <button
          onClick={handleScrollToForm}
          className="text-[#EB6A48] text-sm font-semibold mx-3"
        >
          {t("s1-serve-now")}
        </button>
        <img className="mt-[-10px]" src={star1} alt="Star decoration" />
      </div>
    </section>
  );
};

export default Hero;
