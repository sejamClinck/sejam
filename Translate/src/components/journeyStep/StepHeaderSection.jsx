import { useTranslation } from "react-i18next";

const StepHeaderSection = () => {
  const { t } = useTranslation("journeyStep");
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-10 my-[100px] text-center">
      <div className="inline-flex flex-col items-center gap-8">
        <div className="hidden md:block w-[50%] h-[70px] bg-[#e0eaed] rounded-full"></div>
        <h1 className="relative mt-[-100px] text-[#1e282e] text-5xl font-bold">
          {t("care")}
        </h1>
        <p className="text-[#456675] text-xl font-bold leading-loose">
          {t("slug")}
        </p>
      </div>
    </section>
  );
};

export default StepHeaderSection;
