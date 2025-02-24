import docktor1 from "../../assets/img/doctors/d1.png";
import docktor2 from "../../assets/img/doctors/d2.png";
import { useTranslation } from "react-i18next";

const DoctorsSection = () => {
  const { t } = useTranslation("home"); // Use 'home' namespace

  return (
    <section
      className=" p-1 left-[16.10px] bottom-[10px] absolute bg-white/0 rounded-[130.64px] backdrop-blur-[20.10px] flex-col justify-center items-center gap-2.5 inline-flex"
      aria-labelledby="doctors-section-title"
    >
      <h2 className="sr-only" id="doctors-section-title">
        من أكفأ الاطباء (Most Skilled Doctors)
      </h2>
      <div className=" justify-start items-center inline-flex">
        <img
          className="Image31 w-[41.20px] h-[41.20px] rounded-[119.86px] border border-white ml-[-10px]"
          src={docktor1}
          alt="Dr. Ahmed - General Practitioner"
          width="41"
          height="41"
          loading="lazy"
        />
        <img
          className="Image32 w-[41.20px] h-[41.20px] rounded-[119.86px] border border-white ml-[-10px]"
          src={docktor2}
          alt="Dr. Fatima - Dentist"
          width="41"
          height="41"
          loading="lazy"
        />
        <div
          className=" w-[41.20px] h-[41.20px] px-2 py-[15.07px] bg-[#fde8e3] rounded-[119.86px] border border-white flex-col justify-center items-center gap-2.5 inline-flex"
          aria-label="20 more doctors available"
        >
          <span className="20 text-right text-[#eb6a48] text-sm font-extrabold font-['Roboto'] leading-snug">
            +20
          </span>
        </div>
        <p className="text-white text-sm md:text-lg font-semibold mr-[5px]">
          {t("s1-effiency-doctors")}
        </p>
      </div>
    </section>
  );
};

export default DoctorsSection;
