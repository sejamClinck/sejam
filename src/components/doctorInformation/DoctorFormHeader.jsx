import { useTranslation } from "react-i18next";

const DoctorFormHeader = () => {
  const { t } = useTranslation("doctorInformation");

  return (
    <section
      className="max-w-8xl md:mx-10 mx-auto px-5 md:px-10 mt-10"
      aria-labelledby="welcome-heading"
    >
      <div className="w-full py-[100px] flex-col justify-center items-center gap-16 inline-flex">
        <header className="flex-col justify-start items-center gap-12 flex">
          <h4
            id="welcome-heading"
            className="max-w-2xl text-center text-[#292929] text-[30px] md:text-[68.91px] font-bold font-['Segoe UI'] leading-[82.69px]"
          >
            {t("we-smile")}
          </h4>
          <p className="self-stretch text-center text-[#656565] text-base font-semibold font-['Segoe UI'] leading-relaxed">
          {t("inform")}
          </p>
        </header>
      </div>
    </section>
  );
};

export default DoctorFormHeader;
