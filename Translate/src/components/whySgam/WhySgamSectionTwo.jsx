import image1 from "../../assets/img/whySegam/image1.png";
import image2 from "../../assets/img/whySegam/image2.png";
import image3 from "../../assets/img/whySegam/image3.png";
import { useTranslation } from "react-i18next";

const WhySgamSectionTwo = () => {
  const { t } = useTranslation("whaySegam");

  const sections = [
    {
      image: image1,
      tag: t("s2-tag1"),
      title: t("s2-title1"),
      description: t("s2-description1"),
      alt: "Family dental care",
    },
    {
      image: image2,
      tag: t("s2-tag2"),
      title: t("s2-title2"),
      description: t("s2-description2"),
      alt: "Modern dental technology",
    },
    {
      image: image3,
      tag: t("s2-tag3"),
      title: t("s2-title3"),
      description: t("s2-description3"),
      alt: "Expert medical team",
    },
  ];

  return (
    <section
      className="why-sgam-section-two py-10"
      aria-labelledby="why-sgam-section-two-heading"
    >
      <div className="max-w-7xl mx-auto px-5 rounded-xl bg-[#fef4f2] py-5">
        <h2 id="why-sgam-section-two-heading" className="sr-only">
          Why Choose SGAM - Section Two
        </h2>
        {sections.map((section, index) => (
          <article
            key={index}
            className="mb-16 last:mb-0"
            aria-labelledby={`section-title-${index}`}
          >
            <img
              className="w-full h-[300px] rounded-[15px] object-cover mb-6"
              src={section.image}
              alt={section.alt}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="flex flex-col items-start gap-2">
              <span className="px-4 py-2 bg-white rounded-full text-[#eb6a48] text-xs font-semibold">
                {section.tag}
              </span>
              <h3
                id={`section-title-${index}`}
                className=" text-[#292929] text-4xl font-bold leading-tight mb-3 w-full"
              >
                {section.title}
              </h3>
              <p className=" text-neutral-600 text-base font-semibold leading-relaxed">
                {section.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhySgamSectionTwo;
