import image1 from "../../assets/img/kids/img1.png";
import image2 from "../../assets/img/kids/img2.png";
import image3 from "../../assets/img/kids/img3.png";
import image4 from "../../assets/img/kids/img4.png";
import image5 from "../../assets/img/kids/img5.png";
import { useTranslation } from "react-i18next";

const KidsSectionTwo = () => {
  const { t } = useTranslation("kids");
  const sections = [
    {
      title: t("title1"),
      description: t("description1"),
      image: image1,
      alt: "بيئة صديقة للأطفال في عيادة طب الأسنان",
    },
    {
      title: t("title2"),
      description: t("description2"),
      image: image2,
      alt: "رعاية وقائية للأسنان",
    },
    {
      title: t("title3"),
      description: t("description3"),
      image: image3,
      alt: "علاج أسنان الأطفال برفق",
    },
    {
      title: t("title4"),
      description: t("description4"),
      image: image4,
      alt: "تعليم العادات الصحية للأسنان",
    },
    {
      title: t("title5"),
      description: t("description5"),
      image: image5,
      alt: "خيارات علاجية مخصصة لأسنان الأطفال",
    },
  ];

  return (
    <section
      className="kids-dental-care py-10"
      aria-label="خدمات طب أسنان الأطفال"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className="flex gap-5 md:gap-[200px] flex-col md:flex-row items-center mb-16 last:mb-0"
          >
            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-2" : ""}`}>
              <img
                src={section.image}
                alt={section.alt}
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:px-8">
              <h2 className=" text-[#292929] text-4xl md:text-5xl font-bold leading-tight mb-4">
                {section.title}
              </h2>
              <p className=" mn-w-[540px] text-neutral-600 text-base leading-7">
                {section.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default KidsSectionTwo;
