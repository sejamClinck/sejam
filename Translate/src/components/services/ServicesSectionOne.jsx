import grid1 from "../../assets/img/services/grid1.png";
import grid2 from "../../assets/img/services/grid2.png";
import grid3 from "../../assets/img/services/grid3.png";
import { useTranslation } from "react-i18next";
const ServicesSectionOne = () => {
  const { t } = useTranslation("services");
  return (
    <section aria-labelledby="services-introduction">
      <div className="relative max-w-8xl md:mx-10 mx-auto px-5 md:px-10 rounded-t-2xl bg-white p-3 mt-[-80px]">
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="basis-2/3 p-3 flex items-center justify-start">
            <div className="flex flex-col items-start gap-[20px]">
              <div className="px-[17.84px] py-[6.42px] bg-[#fef4f2] rounded-[51.36px] justify-center items-center gap-2 inline-flex">
                <div className="text-right text-[#eb6a48] text-xs font-semibold font-['Segoe UI'] leading-[19.10px]">
                  {t("s1-tag")}
                </div>
              </div>
              <h2 className="self-stretch text-right text-[#323f47] text-[40px] font-semibold font-['Segoe UI']">
                {t("s1-title")}
              </h2>
              <p className="self-stretch max-w-[700px] text-right text-[#3d3d3d] text-base font-normal font-['Segoe UI'] leading-relaxed">
                {t("s1-description")}
              </p>
            </div>
          </div>

          <div className="basis-1/3 p-3 flex flex-col items-center gap-5 justify-end">
            <div className="w-full flex flex-row gap-5">
              <div className="basis-1/2">
                <img
                  className="w-full"
                  src={grid1}
                  alt="Grid 1"
                  loading="lazy" // Performance - lazy load images
                />
              </div>
              <div className="basis-1/2">
                <img
                  className="w-full"
                  src={grid2}
                  alt="Grid 2"
                  loading="lazy" // Performance - lazy load images
                />
              </div>
            </div>
            <div className="w-full">
              <img
                className="w-full"
                src={grid3}
                alt="Grid 3"
                loading="lazy" // Performance - lazy load images
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionOne;
