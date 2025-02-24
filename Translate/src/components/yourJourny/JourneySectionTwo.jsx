import { useTranslation } from "react-i18next";
const JourneySectionTwo = () => {
  const { t } = useTranslation("yourJourney");
  return (
    <section aria-labelledby="journey-title" className="my-[100px]">
      <div className="max-w-6xl mx-auto px-5 md:px-10 flex flex-col items-center justify-center">
        {/* Decorative Element */}
        <div className="w-[300px] h-16 bg-[#e0eaed] rounded-full mb-[-70px]" />

        {/* Heading for SEO */}
        <h2
          id="journey-title"
          className="text-[#1e282e] text-5xl font-bold font-['Segoe UI']"
        >
          {t("s2-title")}
        </h2>
      </div>
    </section>
  );
};

export default JourneySectionTwo;
