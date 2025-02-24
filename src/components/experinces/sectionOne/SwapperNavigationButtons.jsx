import { useTranslation } from "react-i18next";

const SwapperNavigationButtons = ({ handleNext, handlePrev }) => {
  const { i18n } = useTranslation("home"); // Use 'home' namespace
  const currentLanguage = i18n.language;
  return (
    <div className="flex items-center justify-center mt-[-30px] max-md:mt-[15px] max-sm:mt-[10px] ">
      {currentLanguage === "ar" && (
        <div className="w-[300px] max-sm:w-[220px] max-md:w-[240px] lg:w-[300px] bg-white p-5 sm:p-3 md:p-4 rounded-t-3xl flex items-center justify-between gap-5">
          <button
            onClick={handlePrev}
            className="bg-[#FAB5A3] w-[100px] max-sm:w-[70px] max-md:w-[90px] lg:w-[100px] rounded-2xl flex items-center justify-center text-white p-1 sm:p-0.5 md:p-1"
            aria-label="Previous slide"
          >
            <svg
              className="h-8 w-8 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-[#F58F74] w-[100px] max-sm:w-[70px] max-md:w-[90px] lg:w-[100px] rounded-2xl flex items-center justify-center text-white p-1 sm:p-0.5 md:p-1"
            aria-label="Next slide"
          >
            <svg
              className="h-8 w-8 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
        </div>
      )}
      {currentLanguage === "en" && (
        <div className="w-[300px] max-sm:w-[220px] max-md:w-[240px] lg:w-[300px] bg-white p-5 sm:p-3 md:p-4 rounded-t-3xl flex items-center justify-between gap-5">
            <button
            onClick={handleNext}
            className="bg-[#F58F74] w-[100px] max-sm:w-[70px] max-md:w-[90px] lg:w-[100px] rounded-2xl flex items-center justify-center text-white p-1 sm:p-0.5 md:p-1"
            aria-label="Next slide"
          >
            <svg
              className="h-8 w-8 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            onClick={handlePrev}
            className="bg-[#FAB5A3] w-[100px] max-sm:w-[70px] max-md:w-[90px] lg:w-[100px] rounded-2xl flex items-center justify-center text-white p-1 sm:p-0.5 md:p-1"
            aria-label="Previous slide"
          >
            <svg
              className="h-8 w-8 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        
        </div>
      )}
    </div>
  );
};

export default SwapperNavigationButtons;
