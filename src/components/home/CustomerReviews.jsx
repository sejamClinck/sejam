import { useState, useEffect } from "react";
import frame51 from "../../assets/img/homeimages/Frame51.png";
import frame52 from "../../assets/img/homeimages/Frame52.png";
import useSmallScreen from "../../hooks/useSmallScreen";
import { useTranslation } from "react-i18next";
import loader from "../../assets/img/loader/loader.gif";

const NavigationButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="bg-red-500 p-3 rounded-lg text-white transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
    aria-label={`${direction} Testimonial`}
  >
    <svg
      className={`h-6 w-6 ${
        direction === "Prev" ? "transform rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 6 15 12 9 18" />
    </svg>
  </button>
);

const CustomerReviews = () => {
  const { t, i18n } = useTranslation("home");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isSmallScreen = useSmallScreen();

  // Fetch reviews based on the current language
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://sijamdashboard.com/api/reviews?lang=${i18n.language}`
        );
        const result = await response.json();
        if (result.success) {
          setReviews(result.data);
        } else {
          throw new Error(result.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [i18n.language]);

  const nextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews]);

  const getVisibleReviews = () => {
    return Array.from(
      { length: isSmallScreen ? 1 : 3 },
      (_, i) => reviews[(activeIndex + i) % reviews.length]
    );
  };

  if (loading)
    return (
      <div className="mt-5 flex items-center justify-center">
        <img src={loader} alt="" className="w-[50px]" />
      </div>
    );
  if (error)
    return (
      <div className="mt-5 flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <section className="max-w-7xl m-auto py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl m-auto flex flex-wrap items-center justify-center sm:justify-between mb-12">
          <div className="w-16 hidden h-16 p-3 rotate-[25deg] mt-[-50px] transform rotate-155 bg-white rounded-xl border-2 border-[#eb6a48] sm:flex justify-center items-center">
            <img src={frame51} alt="Decorative Frame" className="w-10 h-10" />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="w-3 h-1.5 bg-[#eb6a48] rounded-full"></span>
              <span className="w-8 h-1.5 bg-[#eb6a48] rounded-full"></span>
            </div>
            <h2 className="text-[#292929] text-2xl font-semibold font-['Segoe UI']">
              {t("s9-customer-review")}
            </h2>
            <div className="flex items-center gap-1">
              <span className="w-3 h-1.5 bg-[#eb6a48] rounded-full"></span>
              <span className="w-8 h-1.5 bg-[#eb6a48] rounded-full"></span>
            </div>
          </div>

          <div className="hidden w-16 h-16 p-3 transform rotate-25 rotate-[-25deg] bg-white rounded-xl border-2 border-[#eb6a48] sm:flex justify-center items-center">
            <img src={frame52} alt="Decorative Frame" className="w-10 h-10" />
          </div>
        </div>
        <div className="relative w-full flex items-center justify-center">
          <div className="z-10 ml-[-5px]">
            <NavigationButton direction="Previous" onClick={prevReview} />
          </div>

          <div
            className={`grid ${
              isSmallScreen ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"
            } gap-6 z-0`}
          >
            {getVisibleReviews().map((review, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg transition duration-500 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ${
                  index === 1 ? "transform shadow-2xl mt-[-30px]" : ""
                } hover:shadow-2xl hover:mt-[-30px] md:h-[237px] h-auto transition-transform duration-500 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)]`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover "
                    src={review.image}
                    alt={review.user_name}
                  />
                  <h3 className="text-xl font-medium text-[#212832]">
                    {review.user_name}
                  </h3>
                </div>
                <p className="text-[#3e5066] mb-4">{review.review}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-6 w-6 ${
                        i < review.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="z-10 mr-[-10px]">
            <NavigationButton direction="Next" onClick={nextReview} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
