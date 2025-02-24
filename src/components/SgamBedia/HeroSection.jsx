import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation("sgamBedia");
  return (
    <section aria-labelledby="hero-title">
      <div className="relative max-w-8xl mx-0 md:mx-10 mx-auto overflow-hidden rounded-2xl p-3 mt-[-300px]">
        <div
          className="h-[500px] w-full bg-[url('./assets/img/blog/banner.png')] bg-cover rounded-2xl"
          role="img"
          aria-label="Dental blog banner showing important tips about oral health"
        >
          <div className="max-w-4xl h-full flex-col justify-start items-end gap-[29px] inline-flex flex items-center justify-center">
            <div className="p-5">
              <header className="self-stretch h-[138px] flex-col justify-start items-start gap-3 flex">
                {/* Subtitle */}
                <p
                  id="hero-subtitle"
                  className="self-stretch origin-top-left  text-white text-[15px] font-bold font-['Segoe UI']"
                >
                  {t("addvice")}
                </p>

                {/* Title */}
                <h1
                  id="hero-title"
                  className="origin-top-left  text-[#1e282e] text-[25px] md:text-[40px] font-bold font-['Segoe UI']"
                >
                  {t("all")}
                </h1>
              </header>

              {/* Description */}
              <p className="self-stretch origin-top-left mt-5 text-white text-[15px] font-normal font-['Segoe UI'] leading-normal">
                {t("slug")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
