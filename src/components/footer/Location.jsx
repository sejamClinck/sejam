import position from "../../assets/img/homeimages/posation.svg";
import { useTranslation } from "react-i18next";
const Location = () => {
  const { t } = useTranslation("footer"); // Use 'home' namespace

  return (
    <section className="location-section w-full md:w-[330px] flex-col justify-start items-start gap-3 inline-flex">
      <header className="location-header  text-black text-2xl font-semibold font-segoe-ui">
        {t("location")}
      </header>
      <div className="location-details flex-col justify-start items-start gap-8 flex">
        <article className="location-info w-full flex-col justify-start items-start gap-[18px] flex">
          <div className="location-address flex justify-end items-center gap-2">
            <p className=" text-[#3d3d3d] text-base font-semibold font-segoe-ui inline-flex gap-2">
              <img src={position} alt="Map pin icon showing position" />
              <span>{t("reid")}</span> - {t("route")}
            </p>
          </div>
          <p className="location-hours  text-[#3d3d3d] text-base font-semibold font-segoe-ui">
            {t("serve")}
          </p>
        </article>
        <article className="friday-hours self-stretch h-[38px] flex-col justify-start items-start gap-[18px] flex">
          <p className="friday-hours-text ">
            <span className="text-[#3d3d3d] text-base font-semibold font-segoe-ui leading-[27px]">
              {t("friday")}
              <br />
              {t("from-hour")}
            </span>
            <span className="text-[#e8604b] text-base font-semibold font-segoe-ui leading-[27px]">
              {t("asr")}
            </span>
            <span className="text-[#3d3d3d] text-base font-semibold font-segoe-ui leading-[27px]">
              {t("to-hour")}
            </span>
            <span className="text-[#e8604b] text-base font-semibold font-segoe-ui leading-[27px]">
              {t("night")}
            </span>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Location;
