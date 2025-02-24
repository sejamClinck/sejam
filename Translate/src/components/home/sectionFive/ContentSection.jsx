import { useTranslation } from "react-i18next";

const ContentSection = () => {
  const { t } = useTranslation("home"); // Use 'home' namespace

  return (
    <header className="flex items-center gap-4 p-5">
      <div
        className="w-[43px] h-[43px] bg-[#ffbead] rounded-full"
        aria-hidden="true"
      ></div>
      <h2
        id="section-heading"
        className="text-right  max-sm:text-center mr-[-40px]"
      >
        <span className="text-[#456675] text-2xl font-semibold mr-1 max-sm:text-[20px]">
          {t("s6-result-will")}
        </span>
        <span className="text-[#eb6a48] text-2xl font-semibold ml-3 max-sm:text-[20px]">
          {t("s6-magic")}
        </span>
        <span className="text-[#456675] text-2xl font-semibold ml-3 max-sm:text-[20px]">
          {t("s6-with-best")}
        </span>
      </h2>
    </header>
  );
};

export default ContentSection;
