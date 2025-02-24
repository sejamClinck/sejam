import image from "../../assets/img/old/image.png";
import image2 from "../../assets/img/old/image2.png";
import image3 from "../../assets/img/old/image3.png";
import image4 from "../../assets/img/old/image4.png";
import image5 from "../../assets/img/old/image5.png";
import image6 from "../../assets/img/old/image6.png";

import { useTranslation } from "react-i18next";
const ExperiencesSectionTwo = () => {
  const { t } = useTranslation("experiences");
  return (
    <section>
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <h2
          className=" text-[#292929] text-5xl font-bold font-['Segoe UI'] leading-[76.80px]"
         
        >
          {t("experince")}
        </h2>
        <div className="flex flex-row md:flex-row gap-5 my-3">
          <div className="basis-1/3">
            <img
              className="h-full rounded-2xl overflow-hidden w-full object-cover"
              src={image}
              alt="Expert dentist team"
              loading="lazy"
            />
          </div>
          <div className="basis-2/3">
            <img
              className="h-full rounded-2xl overflow-hidden w-full object-cover"
              src={image2}
              alt="Dental care environment"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-row md:flex-row gap-5 my-3">
          <div className="basis-1/2">
            <img
              className="rounded-2xl overflow-hidden w-full h-full object-cover"
              src={image3}
              alt="Dental clinic with modern equipment"
              loading="lazy"
            />
          </div>
          <div className="basis-1/2">
            <img
              className="rounded-2xl h-full overflow-hidden w-full object-cover"
              src={image4}
              alt="Dentist consulting with patient"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-row md:flex-row  gap-5 my-3">
          <div className="basis-1/3">
            <img
              className="rounded-2xl h-full overflow-hidden w-full object-cover"
              src={image5}
              alt="Dental instruments on a tray"
              loading="lazy"
            />
          </div>
          <div className="basis-2/3">
            <img
              className="rounded-2xl h-full overflow-hidden w-full object-cover"
              src={image6}
              alt="Dentist performing procedure"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSectionTwo;
