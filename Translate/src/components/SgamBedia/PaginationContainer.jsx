import { useTranslation } from "react-i18next";

const PaginationContainer = () => {
  const { t } = useTranslation("sgamBedia");
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="h-10  justify-start items-start gap-5 inline-flex">
        <div className="px-4 py-2.5 bg-[#eb6a48] rounded-tr-lg rounded-br-lg border border-[#fef4f2] justify-center items-center gap-2 flex">
          <button className="text-white text-[15px] font-normal font-['Almarai'] leading-tight flex gap-3">
            <svg
              className="h-4 w-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />{" "}
              <polyline points="12 5 19 12 12 19" />
            </svg>
            {t("next")}
          </button>
        </div>
        <div className="px-4 py-2.5 bg-white rounded-tl-lg rounded-bl-lg border border-[#f0f8ff] justify-center items-center gap-2 flex">
          <button className="text-[#1d2838] text-[15px] font-normal font-['Almarai'] leading-tight flex gap-2">
            {t("prev")}
            <svg
              className="h-5 w-5 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="5" y1="12" x2="19" y2="12" />{" "}
              <line x1="5" y1="12" x2="11" y2="18" />{" "}
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationContainer;
