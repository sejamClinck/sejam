import frame49 from "../../../assets/img/homeimages/Frame49.png";
import { useTranslation } from "react-i18next";

const TextSection = () => {
  const { t } = useTranslation("home"); // Use 'home' namespace
  return (
    <article className="rounded-lg p-3 shadow-secondary-1">
      <div className="flex-col justify-start items-start gap-2 inline-flex"></div>
      <div className="gap-2.5 inline-flex flex-col mb-5">
        <img
          className="w-[50px] mb-[-15px]"
          src={frame49}
          alt="Logo icon"
          loading="lazy"
        />
        <div className="md:w-[440px]">
          <div className="w-full  flex gap-5 ">
            <h1
              id="section-title"
              className="self-stretch  flex flex-wrap gap-3"
            >
              <span className="text-[#456675] text-[30px] sm:text-[40px] lg:text-[50.96px] xl:text-[70.96px] font-bold leading-[92.25px]">
                {t("s3-care")}
              </span>
              <span className="text-[#456675] text-[30px] sm:text-[40px] lg:text-[50.96px] xl:text-[70.96px] font-bold leading-[92.25px]">
                {t("s3-best")}
              </span>
              <span className="text-[#e8604b] text-[30px] sm:text-[40px] lg:text-[50.96px] xl:text-[70.96px] font-bold leading-[92.25px]">
                {t("s3-teath")}
              </span>
            </h1>
          </div>
          <p className=" text-neutral-600 text-[16px] lg:w-[300px] sm:text-xl leading-relaxed">
            {t("s3-slug")}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TextSection;
