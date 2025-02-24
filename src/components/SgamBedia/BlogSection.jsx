import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import KeywordTag from "./KewordTag";
import BlogPost from "./BlogPost";
import RecommendedArticle from "./RecommendedArticle";

import b1 from "../../assets/img/blog/b1.png";
import loader from "../../assets/img/loader/loader.gif";

const BlogSection = ({ filter }) => {
  const { t, i18n } = useTranslation("sgamBedia");

  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [lastPage, setLastPage] = useState(1); // Total number of pages
  const [activeKeyword, setActiveKeyword] = useState(null);

  const keywords = [
    t("key1"),
    t("key2"),
    t("key3"),
    t("key4"),
    t("key5"),
    t("key6"),
    t("key7"),
    t("key8"),
    t("key9"),
    t("key10"),
  ];

  useEffect(() => {
    const fetchBlogs = () => {
      setLoading(true);
      const language = i18n.language;
      axios
        .get(
          `https://sijamdashboard.com/api/blogs?lang=${language}&page=${currentPage}`
        )
        .then((response) => {
          if (response.data.success) {
            const fetchedPosts = response.data.data.map((post) => ({
              id: post.id,
              imageUrl: post.imageUrl || b1, // Fallback to default image if no URL
              title: post.title,
              content: post.content,
              tag: post.tag,
            }));
            setBlogPosts(fetchedPosts);
            setLastPage(response.data.pagination.last_page); // Update last page from API
          }
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false); // Correctly pass a function to finally
        });
    };

    fetchBlogs();
  }, [i18n.language, currentPage]); // Dependencies: language and currentPage

  // Filter blog posts based on the filter
  const filteredPosts = blogPosts.filter((post) => {
    const matchesTitle = post.title
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchesTag = activeKeyword
      ? post.tag.toLowerCase() === activeKeyword.toLowerCase()
      : true;
    return matchesTitle && matchesTag;
  });
  // Handle Keyword Click
  const handleKeywordClick = (keyword) => {
    setActiveKeyword(keyword === activeKeyword ? null : keyword); // Toggle active keyword
  };
  // Handle Next state
  const handleNextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  // Handle Prev state
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  // Handle loading state
  if (loading) {
    return (
      <div className="w-full flex items-center justify-center">
        <img className="w-[70px]" src={loader} alt="loading..." />
      </div>
    );
  }
  // Handle error state
  if (error) {
    return (
      <div className="w-full flex items-center justify-center">{error}</div>
    );
  }
  const currentLanguage = i18n.language;

  return (
    <section>
      <div className="max-w-8xl mx-auto px-5 md:px-10 my-[20px] flex flex-col items-center justify-center">
        <div className="flex gap-5 w-full justify-start md:flex-row flex-col">
          <div className="basis-2/3">
            <div className="bg-[#f6f6f6] rounded-2xl p-3">
              <div className="grid-cols-1 sm:grid md:grid-cols-3 gap-5">
                {filteredPosts.map((post) => (
                  <BlogPost key={post.id} {...post} />
                ))}
              </div>
            </div>
            {/* Pagination controls */}
            <div className="flex items-center justify-center mt-5">
              {currentLanguage === "ar" && (
                <div className="h-10 justify-start items-start gap-5 inline-flex">
                  <div
                    className={`px-4 py-2.5 ${
                      currentPage === lastPage ? "bg-gray-400" : "bg-[#eb6a48]"
                    } rounded-tr-lg rounded-br-lg border border-[#fef4f2] justify-center items-center gap-2 flex`}
                  >
                    <button
                      className="text-white text-[15px] bg-white/0 font-normal font-['Almarai'] leading-tight flex gap-3"
                      onClick={handleNextPage}
                      disabled={currentPage === lastPage}
                    >
                      <svg
                        className="h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                      {t("next")}
                    </button>
                  </div>

                  <div
                    className={`px-4 py-2.5 ${
                      currentPage === 1 ? "bg-gray-400" : "bg-white"
                    } rounded-tl-lg rounded-bl-lg border border-[#f0f8ff] justify-center items-center gap-2 flex`}
                  >
                    <button
                      className="text-[#1d2838] bg-white/0 text-[15px] font-normal font-['Almarai'] leading-tight flex gap-2"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
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
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="5" y1="12" x2="11" y2="18" />
                        <line x1="5" y1="12" x2="11" y2="6" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {currentLanguage === "en" && (
                <div className="h-10 justify-start items-start gap-5 inline-flex">
                  <div
                    className={`px-4 py-2.5 ${
                      currentPage === 1 ? "bg-gray-400" : "bg-white"
                    } rounded-tl-lg rounded-bl-lg border border-[#f0f8ff] justify-center items-center gap-2 flex`}
                  >
                    <button
                      className="text-[#1d2838] bg-white/0 text-[15px] font-normal font-['Almarai'] leading-tight flex gap-2"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
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
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="5" y1="12" x2="11" y2="18" />
                        <line x1="5" y1="12" x2="11" y2="6" />
                      </svg>
                      {t("prev")}
                    </button>
                  </div>
                  <div
                    className={`px-4 py-2.5 ${
                      currentPage === lastPage ? "bg-gray-400" : "bg-[#eb6a48]"
                    } rounded-tr-lg rounded-br-lg border border-[#fef4f2] justify-center items-center gap-2 flex`}
                  >
                    <button
                      className="text-white text-[15px] bg-white/0 font-normal font-['Almarai'] leading-tight flex gap-3"
                      onClick={handleNextPage}
                      disabled={currentPage === lastPage}
                    >
                      {t("next")}

                      <svg
                        className="h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="basis-1/4 bg-[#f0f0f0] p-3 rounded-2xl">
            <div className="bg-white rounded-[15px] flex-col justify-start items-start gap-5 inline-flex">
              <div className="self-stretch p-5 flex-col justify-start items-start gap-4 flex">
                <div className="justify-end items-center gap-1 inline-flex">
                  <div className="w-[7px] h-[7px] bg-[#eb6a48] rounded-full"></div>
                  <div className="text-black text-base font-semibold font-['Segoe UI']">
                    {t("words-main")}
                  </div>
                </div>
                <div className="self-stretch justify-end items-start gap-2.5 inline-flex flex-wrap">
                  {keywords.map((keyword, index) => (
                    <KeywordTag
                      key={index}
                      keyword={keyword}
                      isActive={keyword === activeKeyword}
                      onClick={() => handleKeywordClick(keyword)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full bg-white rounded-[15px] flex-col justify-start items-start gap-5 inline-flex mt-5">
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="h-[349px] p-5 flex-col justify-start items-start gap-4 inline-flex overflow-y-scroll">
                  <div className="justify-end items-center gap-1 inline-flex">
                    <div className="w-[7px] h-[7px] bg-[#eb6a48] rounded-full"></div>
                    <div className="text-black text-base font-semibold font-['Segoe UI']">
                      {t("articles-recommended")}
                    </div>
                  </div>
                  {blogPosts.map((article, index) => (
                    <RecommendedArticle key={index} {...article} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
