import c1 from "../../assets/img/gearnyWithSegam/c1.png";
import c2 from "../../assets/img/gearnyWithSegam/c2.png";
import c3 from "../../assets/img/gearnyWithSegam/c3.png";
import c4 from "../../assets/img/gearnyWithSegam/c4.png";
import c5 from "../../assets/img/gearnyWithSegam/c5.png";

import Step from "./Step";
import { useTranslation } from "react-i18next";

// JourneySectionThree Component
const JourneySectionThree = () => {
  const { t } = useTranslation("yourJourney");
  // Data array for steps
  const stepsData = [
    {
      number: 1,
      image: c1,
      smallText: t("smallText1"),
      title: t("title1"),
      description: t("description1"),
      isImageFirst: true,
    },
    {
      number: 2,
      image: c2,
      smallText: t("smallText2"),
      title: t("title2"),
      description: t("description2"),
      isImageFirst: false,
    },
    {
      number: 3,
      image: c3,
      smallText: t("smallText3"),
      title: t("title3"),
      description: t("description3"),
      isImageFirst: true,
    },
    {
      number: 4,
      image: c4,
      smallText: t("smallText4"),
      title: t("title4"),
      description: t("description4"),
      isImageFirst: false,
    },
    {
      number: 5,
      image: c5,
      smallText: t("smallText5"),
      title: t("title5"),
      description: t("description5"),
      isImageFirst: true,
    },
  ];

  return (
    <section aria-labelledby="journey-section-heading">
      <h2 id="journey-section-heading" className="sr-only">
        Our Treatment Journey
      </h2>

      <div className="max-w-6xl mx-auto px-5 md:px-10 mt-10">
        {/* Map through the stepsData array and render Step component for each step */}
        {stepsData.map((step, index) => (
          <div key={index} className="mt-10">
            <Step
              number={step.number}
              image={step.image}
              smallText={step.smallText}
              title={step.title}
              description={step.description}
              isImageFirst={step.isImageFirst}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneySectionThree;
