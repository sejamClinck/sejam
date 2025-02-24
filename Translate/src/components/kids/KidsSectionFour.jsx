import { useTranslation } from "react-i18next";

const KidsSectionFour = () => {
  const { t } = useTranslation("kids");
  return (
    <section className="py-24 bg-gray-50" aria-labelledby="contact-cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="contact-cta-heading"
            className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
           {t("s4-we-here")}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
           {t("s4-slug")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default KidsSectionFour;
