import banner2 from "../../assets/img/kids/banner2.png";
import banner from "../../assets/img/kids/banner.png";
import banner3 from "../../assets/img/kids/banner3.png";
import { useTranslation } from "react-i18next";

const KidsSectionOne = () => {
  const { t } = useTranslation("kids");
  return (
    <section aria-labelledby="section-title">
      <div className="relative max-w-8xl mx-0 md:mx-10 mx-auto px-5 md:px-10 rounded-t-2xl p-3 mt-[-250px]">
        <div className="flex flex-col md:flex-row gap-5">
          <figure className="basis-1/3 flex flex-col items-center gap-5 justify-end">
            <img
              src={banner2}
              alt="Banner showing kids dental care"
              className="w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="basis-2/3 flex items-center justify-center">
            <img
              src={banner}
              alt="Main kids dental care banner"
              className="w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </figure>
        </div>

        <div
          className="w-full mt-5 h-[500px] bg-cover rounded-2xl"
          style={{
            backgroundImage: `url(${banner3})`,
          }}
          role="img"
          aria-label="Background image promoting dental care"
        >
          <article className="flex items-center h-full">
            <div className="p-5 max-w-3xl flex-col justify-start gap-5 inline-flex">
              <h1
                id="section-title"
                className="mt-10  text-white text-[40.77px] font-bold leading-tight"
              >
                {t("s1-care")}
              </h1>
              <p className=" text-xl font-normal text-white leading-[34px]">
                <span>
                  {t("s1-in")}
                  <span className="text-[#e8604b] font-semibold underline">
                    {t("s1-segam")}
                  </span>
                  {t("s1-slug")}
                  <strong>{t("s1-long-life")}</strong>.
                </span>
                <br />
                <span>
                  <strong>{t("s1-medical-team")}</strong> 
                  {t("s1-trained")}
                  <strong>{t("entertainment")}</strong>
                  {t("s1-un-confuesd")}
                </span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default KidsSectionOne;
