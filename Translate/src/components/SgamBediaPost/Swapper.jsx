import { useState, useRef } from "react";

const Swapper = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide
  const containerRef = useRef(null); // Reference to the swiper container

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Assuming you have 4 items for demonstration

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Adjust scroll amount as per item width
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Adjust scroll amount as per item width
    }
  };

  return (
    <div className="swapper">
      <div className="flex items-center justify-between mt-10">
        <div className="">
          <div className="text-right text-black text-xl font-semibold font-['Segoe UI']">
            مقالات اخرى لك
          </div>
        </div>
        <div className="">
          <div className="flex gap-5">
            <button
              id="prevBtn"
              className={`bg-red-500  p-3 rounded-lg text-white ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handlePrev}
              disabled={currentIndex === 0}
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
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
            <button
              id="nextBtn"
              className={`bg-red-500 p-3 rounded-lg text-white ${
                currentIndex === items.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={handleNext}
              disabled={currentIndex === items.length - 1}
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
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Swappable Items */}
      <div
        className="max-w-[1000px] flex gap-5 overflow-hidden mt-5"
        ref={containerRef} // Reference to the swiper container
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[290px] p-2.5 bg-[#fef4f2] rounded-[15px] justify-center items-center gap-2.5 inline-flex"
          >
            <div className="w-[270px] flex-col justify-start items-start gap-[7px] inline-flex">
              <div className="h-[100px] self-stretch bg-white rounded-[15px]"></div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch text-right text-[#292929] text-sm font-bold font-['Segoe UI']">
                    أحدث العلاجات والتقنيات {item}
                  </div>
                  <div className="self-stretch text-right text-[#656565] text-[13px] font-normal font-['Segoe UI']">
                    اكتشف أحدث الابتكارات في عالم طب الأسنان، مثل تقنيات تبييض
                    الأسنان، زراعة الأسنان بالليزر، وتقنيات التقويم الحديثة.
                    نحرص على إبقائك مطلعًا على كل ما هو جديد.
                  </div>
                </div>
                <div className="p-2.5 bg-[#fef4f2] rounded-[120px] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-right text-[#eb6a48] text-[10px] font-normal font-['Segoe UI']">
                    ابقَ على اطلاع
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swapper;
