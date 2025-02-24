import { useTranslation } from "react-i18next";

const FilterSection = () => {
  const { t } = useTranslation("sgamBedia");
  return (
    <section
      aria-labelledby="filter-section"
      className="pb-0 w-[800px] max-sm:w-[370px]"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <form className="flex flex-wrap gap-5 items-center">
          {/* Search Box */}
          <div className="bg-[#f6f6f6] w-full rounded-lg p-2 flex gap-4 items-center">
            <label htmlFor="search" className="sr-only">
              {t("search")}
            </label>
            <div className="p-[13px] bg-[#eb6a48] rounded-lg">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              id="search"
              type="search"
              placeholder={t("search")}
              aria-label="Search"
              className="w-full h-[52px] px-4 bg-[#f6f6f6] rounded-lg focus:outline-none"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default FilterSection;
