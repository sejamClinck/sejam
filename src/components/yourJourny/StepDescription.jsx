import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StepDescription = ({ smallText, title, description, service_id }) => {
  const { t } = useTranslation("journeyStep");

  return (
    <header className="w-full md:basis-1/2 flex items-center justify-center">
      <div className="text-center md:text-left w-full max-w-md">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="px-4 py-2 bg-[#fef4f2] rounded-full inline-flex items-center justify-center">
            <p className="text-[#eb6a48] text-xs font-semibold font-['Segoe UI'] leading-snug text-start">
              {smallText}
            </p>
          </div>
          <h3 className="text-[#292929] text-4xl md:text-5xl font-semibold font-['Segoe UI'] text-start">
            {title}
          </h3>
        </div>
        <p className="mt-2 text-[#3d3d3d] text-base font-semibold font-['Segoe UI'] leading-7 text-start">
          {description}
        </p>
        <div className="mt-4 text-start md:">
          <Link
            to={`/your-journey/${service_id}`}
            className="inline-block max-sm:mb-10 px-6 py-2 bg-[#507A8A] text-white rounded-full font-semibold hover:bg-[#d55a3a] transition-colors duration-300 small"
          >
            {t("leaenMore")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default StepDescription;
