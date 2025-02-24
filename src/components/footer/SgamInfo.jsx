import LogoDark from "../../assets/img/homeimages/logo_dark.png";
import { useTranslation } from "react-i18next";

const SgamInfo = () => {
  const { t } = useTranslation("footer"); // Use 'home' namespace

  return (
    <div className="sgam-info-container w-full md:w-[325px] flex flex-col justify-start items-start gap-9">
      <div className="sgam-info-content w-full flex flex-col justify-start items-start gap-3">
        <img
          className="sgam-logo w-[241px] h-[89px]"
          src={LogoDark}
          alt="Sgam Clinic Logo"
        />
        <p className="sgam-description text-justify text-[#7c7c7c] text-[15px] font-normal font-['Segoe UI'] leading-normal">
          {t("apply")}
        </p>
      </div>
    </div>
  );
};

export default SgamInfo;
