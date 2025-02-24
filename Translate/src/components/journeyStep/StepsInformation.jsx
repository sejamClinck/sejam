import Step from "./Step";
import image2 from "../../assets/img/gurnyDetails/img2.png";
import image1 from "../../assets/img/gurnyDetails/img1.png";
import image3 from "../../assets/img/gurnyDetails/img3.png";
import image4 from "../../assets/img/gurnyDetails/img4.png";
import image5 from "../../assets/img/gurnyDetails/img5.png";
import { useTranslation } from "react-i18next";

const StepsInformation = () => {
  const { t } = useTranslation("journeyStep");
  // Array containing step data
  const stepsData = [
    {
      number: 1,
      title: t("title1"),
      description: t("description1"),
      imageSrc: image1,
      altText: "تشخيص دقيق للأسنان",
    },
    {
      number: 2,
      title: t("title2"),
      description: t("description2"),
      imageSrc: image2,
      altText: "إزالة التسوس",
    },
    {
      number: 3,
      title: t("title3"),
      description: t("description3"),
      imageSrc: image3,
      altText: "تحضير السن",
    },
    {
      number: 4,
      title: t("title4"),
      description: t("description4"),
      imageSrc: image4,
      altText: "وضع الحشوة",
    },
    {
      number: 5,
      title: t("title5"),
      description: t("description5"),
      imageSrc: image5,
      altText: "تلميع الأسنان",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-10 my-10">
      {/* Map through the stepsData array to render each Step component */}
      {stepsData.map((step) => (
        <Step
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
          imageSrc={step.imageSrc}
          altText={step.altText}
        />
      ))}
    </section>
  );
};

export default StepsInformation;
