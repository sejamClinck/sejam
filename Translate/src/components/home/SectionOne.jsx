import doctor3 from "../../assets/img/homeimages/section1-d3.png";
import doctor2 from "../../assets/img/homeimages/section1-d1.png"; // Adjust paths as needed
import doctor4 from "../../assets/img/homeimages/section1-d2.png";
import doctor5 from "../../assets/img/homeimages/section1-d4.png";
import Frame from "../../assets/img/homeimages/Frame 48.png";
import { useTranslation } from "react-i18next";
const SectionOne = () => {
  const { t } = useTranslation("home"); // Use 'home' namespace
  return (
    <section className="px-0  lg:px-[200px] mt-10 ">
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
          <div className="max-w-2xl m-auto flex  gap-5">
            <div className="flex flex-col gap-5 mt-[-10px]">
              <img
                className="rounded-[13.81px]"
                src={doctor2}
                alt="Doctor image 1"
              />
              <img
                className="rounded-[13.81px]"
                src={doctor3}
                alt="Doctor image 2"
              />
            </div>

            <div className="flex flex-col gap-5 mt-[30px]">
              <img
                className="rounded-[13.81px]"
                src={doctor4}
                alt="Doctor image 3"
              />
              <img
                className="rounded-[13.81px]"
                src={doctor5}
                alt="Doctor image 4"
              />
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default SectionOne;
