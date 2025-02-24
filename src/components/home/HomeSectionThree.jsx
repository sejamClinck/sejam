import frame50 from "../../assets/img/homeimages/Frame50.png";
import smilep6 from "../../assets/img/homeimages/smail-p6.png";
import { useTranslation } from "react-i18next";
const HomeSectionThree = () => {
  const { t } = useTranslation("home");
  return (
    <section
      className="px-0 lg:px-[200px] xl:px-[350px] mt-[70px]"
      aria-labelledby="section-title"
    >
      <div className="flex items-center justify-between max-sm:flex-col">
        {/* Text Block */}
        <div className="me-4 block rounded-lg shadow-secondary-1">
          <article className="p-3">
            {/* Icon or Image for better performance (use next/image if available) */}
            <figure className="Frame48 w-[50px] h-[50px] justify-center items-center gap-2.5 inline-flex">
              <img
                src={frame50}
                alt="Icon representing care"
                loading="lazy"
                width="50"
                height="50"
              />
            </figure>

            {/* Heading Block */}
            <div className="Frame29 self-stretch w-full md:w-[440px] flex-col justify-start items-start gap-4 max-sm:gap-0 flex">
              <h1
                id="section-title"
                className="self-stretch  flex flex-wrap gap-3"
              >
                <span className="text-[#456675] text-[30px] sm:text-[40px] lg:text-[50.96px] xl:text-[70.96px] font-bold leading-[92.25px] max-sm:leading-[70px]">
                  {t("s4-care")}
                </span>
                <span className="text-[#456675] text-[30px] sm:text-[40px] lg:text-[50.96px] xl:text-[70.96px] font-bold leading-[92.25px] max-sm:leading-[70px]">
                  {t("s4-start")}
                </span>
                <span className="text-[#e8604b] text-[30px] sm:text-[40px] lg:text-[50.96px] xl:text-[70.96px] font-bold leading-[92.25px] max-sm:leading-[70px]">
                  {t("s4-smile")}
                </span>
              </h1>
              <p className="w-[100%] lg:w-[330px]  text-neutral-600 text-[16px] sm:text-xl font-normal leading-relaxed">
                {t("s4-slug")}
              </p>
            </div>
          </article>
        </div>

        {/* Image Block */}
        <div className="rounded-lg shadow-secondary-1 p-3 ">
          <div className="flex flex-wrap gap-3">
            <figure className="bg-red-500 rounded-lg shadow-secondary-1">
              <div className="MaskGroup w-[100%] h-[434px] relative bg-[#fef4f2]">
                <img
                  className="Union w-[100%] h-[434px]"
                  src={smilep6}
                  alt="Smiling person"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;
