import doctors from "../../assets/img/doctors/doctors.png";
import { useTranslation } from "react-i18next";

const OurTeam = () => {
  const { t } = useTranslation("doctors");
  return (
    <section aria-labelledby="team-section" role="region ">
      <div className="relative max-w-8xl  md:mx-10 mx-auto px-5 md:px-10 rounded-t-2xl bg-white p-[30px] mt-[-80px]">
        <div className="flex  md:flex-row flex-col">
          <div className="basis-1/2 p-3 flex items-center justify-between">
            <div className="flex flex-col  gap-3 items-start ">
              {/* Updated to use <span> for inline text and a <p> tag for the SEO-friendly section */}
              <p
                className="px-[17.84px] py-[6.42px] bg-[#fef4f2] rounded-[51.36px] flex justify-center items-center  gap-2 w-[200px]"
                role="text"
              >
                <span className="text-right text-[#eb6a48] text-xs font-semibold font-['Segoe UI'] leading-[19.10px] ">
                  {t("experinces")}
                </span>
              </p>

              {/* Used <h1> for main heading to boost SEO */}
              <h1
                id="team-section"
                className="self-stretch text-right text-[#323f47] text-[40px] font-semibold font-['Segoe UI']"
              >
                {t("doctors-team")}
              </h1>

              {/* Changed <div> to <p> to make it semantically correct */}
              <p className="self-stretch text-start text-[#3d3d3d] text-base font-normal font-['Segoe UI'] leading-relaxed max-w-[750px]">
                {t("slug")}
              </p>
            </div>
          </div>

          <div className="basis-1/2 p-3 flex flex-col items-center gap-5 justify-end">
            <div className="w-full">
              {/* Added descriptive alt text for SEO and accessibility */}
              <img
                className="w-full"
                src={doctors}
                alt="مجموعة أطباء متخصصين في طب الأسنان"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
