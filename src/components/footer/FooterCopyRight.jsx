import { useTranslation } from "react-i18next";

const FooterCopyRight = () => {
  const { t } = useTranslation("footer"); // Use 'home' namespace

  return (
    <footer className="footer w-auto h-16 p-2.5 mt-8 border-t border-white flex justify-center items-center gap-2.5">
      <p className="footer-text text-center text-black text-sm font-semibold font-segoe-ui mt-3">
        {t("copy-right")}
      </p>
    </footer>
  );
};

export default FooterCopyRight;
