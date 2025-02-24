import { useState, useEffect } from "react";
import frame51 from "../../assets/img/homeimages/Frame51.png";
import frame52 from "../../assets/img/homeimages/Frame52.png";
import fatmaImage from "../../assets/img/homeimages/fatma.png";
import mohamedImage from "../../assets/img/homeimages/mohamed.png";
import saraImage from "../../assets/img/homeimages/sara.png";
import useSmallScreen from "../../hooks/useSmallScreen";
import { useTranslation } from "react-i18next";

const NavigationButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="bg-red-500 p-3  rounded-lg text-white transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
    aria-label={`${direction} Testimonial`}
  >
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline
        points={direction === "Next" ? "15 6 9 12 15 18" : "9 6 15 12 9 18"}
      />
    </svg>
  </button>
);

const CustomerReviews = () => {
  const { t } = useTranslation("home"); // Use 'home' namespace

  const customers = [
    {
      image: fatmaImage,
      name: t("s9-fatma"),
      review: t("s9-review1"),
    },
    {
      image: mohamedImage,
      name: t("s9-mohamed"),
      review: t("s9-review2"),
    },
    {
      image: saraImage,
      name: t("s9-sara"),
      review: t("s9-review3"),
    },
    // Additional reviews...
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const isSmallScreen = useSmallScreen(); // Hook to detect screen size

  const nextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % customers.length);
  };

  const prevReview = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + customers.length) % customers.length
    );
  };

  // Autoplay feature
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000); // Auto-play every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Adjust visible customers based on screen size
  const getVisibleCustomers = () => {
    return Array.from(
      { length: isSmallScreen ? 1 : 3 }, // 1 card for small, 3 cards for larger screens
      (_, i) => customers[(activeIndex + i) % customers.length]
    );
  };

  return (
    <section className="max-w-7xl m-auto py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl m-auto flex flex-wrap items-center justify-center sm:justify-between mb-12">
          <div className="w-16 hidden h-16 p-3 rotate-[25deg] mt-[-50px] transform rotate-155 bg-white rounded-xl border-2 border-[#eb6a48] sm:flex justify-center items-center">
            <img src={frame51} alt="Decorative Frame" className="w-10 h-10" />
          </div>

          <div className="flex items-center gap-4 ">
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

          <div className="hidden w-16 h-16 p-3 transform rotate-25 rotate-[-25deg]  bg-white rounded-xl border-2 border-[#eb6a48] sm:flex justify-center items-center">
            <img src={frame52} alt="Decorative Frame" className="w-10 h-10 " />
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
            {getVisibleCustomers().map((customer, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg transition duration-500 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)]  ${
                  index === activeIndex ? "transform shadow-2xl" : ""
                } hover:shadow-2xl hover:mt-[-30px] md:h-[237px] h-[250px] transition-transform duration-500 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)]`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={customer.image}
                    alt={customer.name}
                  />
                  <h3 className="text-xl font-medium text-[#212832]">
                    {customer.name}
                  </h3>
                </div>
                <p className="text-[#3e5066] mb-4">{customer.review}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-6 w-6 ${
                        i < 4 ? "text-yellow-500" : "text-gray-300"
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
