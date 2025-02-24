import { useState, useEffect } from "react";

import SectionTitle from "./sectionThree/SectionTitle";
import NavigationButton from "./sectionThree/NavigationButton";
import TestimonialCard from "./sectionThree/TestimonialCard";
import { useTranslation } from "react-i18next";

const ExperiencesSectionThree = () => {
  const { t } = useTranslation("experiences");
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: t("s9-mohamed"),
      image: "https://via.placeholder.com/38x38",
      testimonial:
        "تجربتي في العيادة كانت مذهلة! الفريق الطبي محترف جدًا، وشعرت بالراحة منذ اللحظة الأولى. الآن أبتسم بثقة أكبر.",
    },
    {
      name: t("s9-fatma"),
      image: "https://via.placeholder.com/38x38",
      testimonial: t("s9-review1"),
    },
    {
      name: t("s9-ahmed"),
      image: "https://via.placeholder.com/38x38",
      testimonial: t("s9-review2"),
    },
    {
      name: t("s9-sara"),
      image: "https://via.placeholder.com/38x38",
      testimonial: t("s9-review3"),
    },
    {
      name: "عبدالله الغامدي",
      image: "https://via.placeholder.com/38x38",
      testimonial: t("s9-review3"),
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const isSmallScreen = window.innerWidth < 768;
    return Array.from(
      { length: isSmallScreen ? 1 : 3 }, // Show 1 card for small screens, 3 for larger screens
      (_, i) => testimonials[(activeIndex + i) % testimonials.length]
    );
  };

  return (
    <section className="py-10  mb-[80px]">
      <div className="max-w-8xl mx-auto px-4 mb-[20px]">
        <SectionTitle title={t("customer-review")} />
        <div className="max-w-8xl p-5 flex flex-col md:flex-row items-center justify-center mt-5 max-sm:mt-0 relative overflow-hidden ">
          {getVisibleTestimonials().map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              isActive={index === 1} // Only one card active for small screens, middle card active for larger screens
            />
          ))}
        </div>
        <div className="max-w-8xl flex gap-5 items-center justify-center mt-5">
          <div className="flex gap-5">
            <NavigationButton direction="Previous" onClick={handlePrev} />
            <NavigationButton direction="Next" onClick={handleNext} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSectionThree;
