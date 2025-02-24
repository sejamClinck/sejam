import ServiceCard from "./ServiceCard"; // Assuming ServiceCard is in the same directory
import img1 from "../../assets/img/services/img1.png";
import img2 from "../../assets/img/services/img2.png";
import img3 from "../../assets/img/services/img3.png";
import img4 from "../../assets/img/services/img4.png";
import img5 from "../../assets/img/services/img5.png";
import img6 from "../../assets/img/services/img6.png";
import img7 from "../../assets/img/services/img7.png";
import img8 from "../../assets/img/services/img8.png";
import { useTranslation } from "react-i18next";
const ServicesSectionTwo = () => {
  const { t } = useTranslation("services");

  const services = [
    {
      title: t("s2-title1"),
      description: t("s2-description1"),
      imageSrc: img1,
      imageAlt: "Preventive dental care service",
      isReversed: true,
    },
    {
      title: t("s2-title2"),
      description: t("s2-description2"),
      imageSrc: img2,
      imageAlt: "Orthodontics service",
      isReversed: false,
    },
    {
      title: t("s2-title3"),
      description: t("s2-description3"),
      imageSrc: img3,
      imageAlt: "Oral surgery service",
      isReversed: true,
    },
    {
      title: t("s2-title4"),
      description: t("s2-description4"),
      imageSrc: img4,
      imageAlt: "Root canal treatment service",
      isReversed: false,
    },
    {
      title: t("s2-title5"),
      description: t("s2-description5"),
      imageSrc: img5,
      imageAlt: "Emergency dental care",
      isReversed: true,
    },
    {
      title: t("s2-title6"),
      description: t("s2-description6"),
      imageSrc: img6,
      imageAlt: "Cosmetic dentistry service",
      isReversed: false,
    },
    {
      title: t("s2-title7"),
      description: t("s2-description7"),
      imageSrc: img7,
      imageAlt: "Dental prosthetics service",
      isReversed: true,
    },
    {
      title: t("s2-title8"),
      description: t("s2-description8"),
      imageSrc: img8,
      imageAlt: "Pediatric dentistry service",
      isReversed: false,
    },
  ];

  return (
    <section className="mb-15" aria-labelledby="services-heading">
      <h2 id="services-heading" className="sr-only">
        Dental Services We Offer
      </h2>
      <div className="max-w-[1400px] mx-auto mt-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            isReversed={service.isReversed}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSectionTwo;
