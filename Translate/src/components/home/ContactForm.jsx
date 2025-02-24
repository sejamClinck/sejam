import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation("home"); // Use 'home' namespace

  return (
    <section
      id="content-form"
      className="rounded-lg shadow-secondary-1 my-3 w-full md:w-[100%]"
      aria-labelledby="contact-section-title"
    >
      <div className="w-[100%] rounded-2xl h-[400px] mb-[-390px] rotate-[5.36deg] bg-white/50 p-5 mx-auto z-10"></div>
      <div className="rounded-2xl bg-white p-5 rotate-[0deg] z-0">
        <form className="flex-col w-full justify-start items-center gap-[47px] inline-flex p-5">
          <div className=" flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch text-center text-[#292929] text-[40px] font-bold font-['Segoe UI'] leading-[48px] max-sm:text-[26px] max-sm:leading-[25px]">
              {t("s11-stay-at-contact")}
            </div>
            <div className="self-stretch text-center text-[#656565] text-sm font-semibold font-['Segoe UI'] leading-snug">
              {t("s11-from-slug")}
            </div>
          </div>
          <div className="self-stretch h-[546px] flex-col justify-start items-center gap-4 flex">
            <div className="self-stretch h-[486px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-[84px] flex-col justify-start items-start gap-3.5 flex">
                <label className="grow shrink basis-0 text-right text-[#3d3d3d] text-sm font-bold font-['Segoe UI'] leading-snug">
                  {t("s11-full-name")}
                </label>
                <input
                  type="text"
                  className="self-stretch h-[60px] bg-[#f9f9f9] rounded-[10px] border focus:border-[#e0917c] p-2 focus:outline-none"
                  placeholder={t("s11-full-name")}
                />
              </div>
              <div className="self-stretch h-[84px] flex-col justify-start items-start gap-3.5 flex">
                <label className="grow shrink basis-0 text-right text-[#3d3d3d] text-sm font-bold font-['Segoe UI'] leading-snug">
                  {t("s11-phone-number")}
                </label>
                <input
                  type="text"
                  className="self-stretch h-[60px] bg-[#f9f9f9] rounded-[10px] border focus:border-[#e0917c] p-2 focus:outline-none"
                  placeholder={t("s11-phone-number")}
                />
              </div>
              <div className="self-stretch h-[84px] flex-col justify-start items-start gap-3.5 flex">
                <label className="grow shrink basis-0 text-right text-[#3d3d3d] text-sm font-bold font-['Segoe UI'] leading-snug">
                {t("s11-email")}
                </label>
                <input
                  type="email"
                  className="self-stretch h-[60px] bg-[#f9f9f9] rounded-[10px] border focus:border-[#e0917c] p-2 focus:outline-none"
                  placeholder={t("s11-email")}
                />
              </div>
              <div className="self-stretch h-[162px] flex-col justify-start items-start gap-3.5 flex">
                <label className="grow shrink basis-0 text-right text-[#3d3d3d] text-sm font-bold font-['Segoe UI'] leading-snug">
                {t("s11-message")}
                </label>
                <textarea className="h-full self-stretch bg-[#f9f9f9] rounded-[10px] border focus:border-[#e0917c] p-2 focus:outline-none">
                  {" "}
                </textarea>
              </div>
            </div>
            <div className="self-stretch h-11 p-2.5 bg-[#eb6a48] rounded-[50px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-right text-white text-sm font-semibold font-['Segoe UI'] leading-snug">
              {t("s11-send")}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
