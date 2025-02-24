import waved from "../../assets/img/gearnyWithSegam/waved.png";
import { useTranslation } from "react-i18next";

const JourneySectionOne = () => {
  const { t } = useTranslation("yourJourney");
  return (
    <section className="relative max-w-8xl mx-0 md:mx-10 mx-auto px-5 md:px-10 rounded-t-2xl bg-white p-3 mt-[-80px]">
      <div className="flex flex-col md:flex-row">
        {/* Text Content */}
        <article className="basis-2/3">
          <header className="max-w-2xl">
            {/* SEO and Accessibility */}
            <p className="px-[17.84px] py-[6.42px] bg-[#fef4f2] rounded-[51.36px] inline-flex items-center gap-2  text-[#eb6a48] text-xs font-semibold leading-[19.10px]">
              {t("s1-tag")}
            </p>
            {/* Main Heading for SEO */}
            <h1 className=" text-[#323f47] text-[40px] font-semibold leading-tight mt-4">
              {t("s1-title")}
            </h1>
            {/* Descriptive Paragraph */}
            <p className=" text-[#3d3d3d] text-base leading-relaxed mt-3">
              {t("s1-description")}
            </p>
          </header>
        </article>

        {/* Images Section */}
        <aside className="basis-1/3 flex items-end justify-end">
          <div className="relative w-full">
            <img src={waved} alt="" />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default JourneySectionOne;
