import { useState, useEffect } from "react";
import SectionTitle from "./sectionThree/SectionTitle";
import NavigationButton from "./sectionThree/NavigationButton";
import TestimonialCard from "./sectionThree/TestimonialCard";
import { useTranslation } from "react-i18next";
import loader from "../../assets/img/loader/loader.gif";
const ExperiencesSectionThree = () => {
  const { t, i18n } = useTranslation("experiences");
  const currentLanguage = i18n.language;

  // States for fetched data, loading, and error
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fetch reviews from the API based on the current language
  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true); // Start loading
      setError(null); // Clear previous errors
      try {
        const response = await fetch(
          `https://sijamdashboard.com/api/reviews?lang=${currentLanguage}`
        );
        const data = await response.json();
        if (data.success) {
          setTestimonials(data.data); // Set the testimonials from API
        } else {
          setError(data.message || "Failed to fetch reviews");
        }
      } catch (error) {
        setError(error.message || "Failed to fetch reviews");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchTestimonials();
  }, [currentLanguage]); // Refetch reviews when language changes

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
  }, [testimonials]);

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

        {/* Loading and Error states */}
        {loading && (
          <div className="mt-5 flex items-center justify-center">
            <img src={loader} alt="" className="w-[50px]" />
          </div>
        )}
        {error && <p className="mt-5 flex items-center justify-center text-red-500">{error}</p>}

        {!loading && !error && testimonials.length > 0 && (
          <div className="max-w-8xl p-5 flex flex-col md:flex-row items-center justify-center mt-5 max-sm:mt-0 relative overflow-hidden ">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.user_name}
                image={testimonial.image}
                rating={testimonial.rating}
                testimonial={testimonial.review}
                isActive={index === 1} // Only one card active for small screens, middle card active for larger screens
              />
            ))}
          </div>
        )}

        <div className="max-w-8xl flex gap-5 items-center justify-center mt-5">
          <div className="flex gap-5">
            {currentLanguage === "ar" && (
              <>
                <NavigationButton direction="Previous" onClick={handlePrev} />
                <NavigationButton direction="Next" onClick={handleNext} />
              </>
            )}
            {currentLanguage === "en" && (
              <>
                <NavigationButton direction="Next" onClick={handleNext} />
                <NavigationButton direction="Previous" onClick={handlePrev} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSectionThree;
