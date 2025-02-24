import { useTranslation } from "react-i18next";
const ReserveButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const contactForm = document.querySelector("#contact-doctor-form");
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const { t } = useTranslation("doctorInformation");

  return (
    <div className="basis-1/4 flex justify-end">
      <a
        href="#contact-doctor-form"
        onClick={handleClick}
        className="bg-[#6b96a5] w-full h-[55px] text-white p-4 rounded-2xl text-center mt-5 md:mt-0 flex items-center justify-center hover:bg-[#5a8194] transition-colors duration-300"
        role="button"
        aria-label="Reserve Now"
        tabIndex="0"
      >
       {t("serve-now")}
      </a>
    </div>
  );
};

export default ReserveButton;
