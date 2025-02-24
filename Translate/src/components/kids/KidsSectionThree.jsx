import wayv from "../../assets/img/kids/wayv.png";
import star from "../../assets/img/homeimages/Star1.png";
import { useTranslation } from "react-i18next";

const KidsSectionThree = () => {
  const { t } = useTranslation("kids");
  return (
    <section
      className="relative h-[40vh] md:h-[150vh]"
      aria-labelledby="section-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${wayv})` }}
        role="img"
        aria-label="Background promoting dental care"
      />
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl ml-auto">
            <h2
              id="section-heading"
              className=" text-white text-3xl md:text-6xl font-bold leading-tight mb-6"
            >
              {t("s3-teeth")}
              <br />
              {t("s3-save-day")}
            </h2>
            <a
              href="#book-appointment"
              className="inline-flex items-center px-6 py-3 bg-[#eb6a48] rounded-full text-white text-lg font-semibold transition-colors duration-300 hover:bg-[#d55a3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#eb6a48]"
              aria-label="Book your appointment now"
            >
              <img
                className="-mb-1 mr-2"
                src={star}
                alt=""
                aria-hidden="true"
                width="20"
                height="20"
              />
             {t("s3-serve-now")}
              <img
                className="-mt-1 ml-2"
                src={star}
                alt=""
                aria-hidden="true"
                width="20"
                height="20"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsSectionThree;
