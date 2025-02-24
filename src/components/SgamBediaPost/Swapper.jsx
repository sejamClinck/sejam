import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import smile from "../../assets/img/showPost/banner.png";
import { Link } from "react-router-dom";
const Swapper = () => {
  const { t, i18n } = useTranslation("sgamBediaPost");
  const currentLanguage = i18n.language;
  // State for fetched blog data
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide
  const containerRef = useRef(null); // Reference to the swiper container

  // Calculate visible cards (adjust width as per actual design)
  const visibleCards = 1; // Show 1 card at a time

  // Fetch blog data based on current language
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://sijamdashboard.com/api/blogs", {
          params: { lang: i18n.language },
        });
        setBlogs(response.data.data || []);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogs();
  }, [i18n.language]); // Fetch data again if language changes

  // Next Button Logic (Swapping one card at a time)
  const handleNext = () => {
    if (containerRef.current && currentIndex < blogs.length - visibleCards) {
      const scrollAmount = containerRef.current.clientWidth / visibleCards; // Scroll width based on visible card width
      setCurrentIndex((prev) => prev + 1);
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Prev Button Logic (Swapping one card at a time)
  const handlePrev = () => {
    if (containerRef.current && currentIndex > 0) {
      const scrollAmount = containerRef.current.clientWidth / visibleCards;
      setCurrentIndex((prev) => prev - 1);
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-play functionality (Swapping every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // 2 seconds delay for auto-play
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="swapper">
      {/* Header Section */}
      <div className="flex items-center justify-between mt-10">
        <div>
          <div className=" text-black text-xl font-semibold font-sans">
            {t("another-content-artical")}
          </div>
        </div>
        {currentLanguage === "ar" && (
          <div className="flex gap-5">
            {/* Previous Button */}
            <button
              id="prevBtn"
              className={`bg-red-500 p-3 rounded-lg text-white hover:bg-red-600 transition-opacity ${
                currentIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100"
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
            {/* Next Button */}
            <button
              id="nextBtn"
              className={`bg-red-500 p-3 rounded-lg text-white hover:bg-red-600 transition-opacity ${
                currentIndex >= blogs.length - visibleCards
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100"
              }`}
              onClick={handleNext}
              disabled={currentIndex >= blogs.length - visibleCards}
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
        )}
        {currentLanguage === "en" && (
          <div className="flex gap-5">
            {/* Next Button */}
            <button
              id="nextBtn"
              className={`bg-red-500 p-3 rounded-lg text-white hover:bg-red-600 transition-opacity ${
                currentIndex >= blogs.length - visibleCards
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100"
              }`}
              onClick={handleNext}
              disabled={currentIndex >= blogs.length - visibleCards}
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
            {/* Previous Button */}
            <button
              id="prevBtn"
              className={`bg-red-500 p-3 rounded-lg text-white hover:bg-red-600 transition-opacity ${
                currentIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100"
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
          </div>
        )}
      </div>
      {/* <Link to={`/blog/${id}`} className="block"> */}
      {/* Swappable Items */}
      <div
        className="max-w-full flex gap-5 overflow-hidden mt-5 p-5"
        ref={containerRef} // Reference to the swiper container
      >
        {blogs.map((blog, index) => (
          <Link
            to={`/blog/${blog.id}`}
            key={index}
            className="w-[290px] p-2.5 bg-[#fef4f2] rounded-[15px] inline-flex justify-center items-center gap-2.5 transition-transform transform hover:scale-105"
          >
            <div className="w-[270px] flex-col justify-start items-start gap-[7px] inline-flex">
              <img
                src={blog.imageUrl || smile}
                alt="blog"
                className="rounded-[15px] h-[170px] w-full object-cover"
              />
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch  text-[#292929] text-sm font-bold font-sans">
                    {blog.title}
                  </div>
                  <p className="text-[#656565] text-base font-normal">
                    {blog.description.slice(0, 100)}...
                  </p>
                </div>
              </div>
              <div className="p-2.5 bg-[#fef4f2] rounded-full inline-flex justify-center items-center gap-2.5">
                <div className=" text-[#eb6a48] text-[10px] font-normal font-sans">
                  {blog.tag}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Swapper;
