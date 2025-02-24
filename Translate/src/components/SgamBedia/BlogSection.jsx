import b1 from "../../assets/img/blog/b1.png";
import { useState } from "react";
import KeywordTag from "./KewordTag";
import BlogPost from "./BlogPost";
import RecommendedArticle from "./RecommendedArticle";
import PaginationContainer from "./PaginationContainer";
import { useTranslation } from "react-i18next";

const BlogSection = () => {
  const { t } = useTranslation("sgamBedia");
  const blogPosts = [
    {
      id: 1,
      imageUrl: b1,
      title: t("title"),
      content: t("content"),
      tag: t("tag"),
    },
    {
      id: 1,
      imageUrl: b1,
      title: t("title"),
      content: t("content"),
      tag: t("tag"),
    },
    {
      id: 1,
      imageUrl: b1,
      title: t("title"),
      content: t("content"),
      tag: t("tag"),
    },
    {
      id: 1,
      imageUrl: b1,
      title: t("title"),
      content: t("content"),
      tag: t("tag"),
    },
    {
      id: 1,
      imageUrl: b1,
      title: t("title"),
      content: t("content"),
      tag: t("tag"),
    },
  ];

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

  const recommendedArticles = [
    {
      title: t("title1"),
      content: t("content1"),
    },
    {
      title: t("title2"),
      content: t("content2"),
    },
    {
      title: t("title3"),
      content: t("content3"),
    },
  ];

  const [activeKeyword, setActiveKeyword] = useState(null);

  const handleKeywordClick = (keyword) => {
    setActiveKeyword(keyword === activeKeyword ? null : keyword);
  };

  return (
    <section>
      <div className="max-w-8xl mx-auto px-5 md:px-10 my-[20px] flex flex-col items-center justify-center">
        <div className="flex gap-5 w-full justify-start md:flex-row flex-col">
          <div className="basis-2/3">
            <div className="bg-[#f6f6f6] rounded-2xl p-3">
              <div className="grid-cols-1 sm:grid md:grid-cols-3 gap-5">
                {blogPosts.map((post) => (
                  <BlogPost key={post.id} {...post} />
                ))}
              </div>
            </div>

            <PaginationContainer />
          </div>

          <div className="basis-1/4 bg-[#f0f0f0] p-3 rounded-2xl">
            <div className="bg-white rounded-[15px] flex-col justify-start items-start gap-5 inline-flex">
              <div className="self-stretch p-5 flex-col justify-start items-start gap-4 flex">
                <div className="justify-end items-center gap-1 inline-flex">
                  <div className="w-[7px] h-[7px] bg-[#eb6a48] rounded-full"></div>
                  <div className=" text-black text-base font-semibold font-['Segoe UI']">
                    {t("words-main")}
                  </div>
                </div>
                <div className="self-stretch   justify-end items-start gap-2.5 inline-flex flex-wrap">
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
                <div className="h-[349px] p-5 flex-col justify-start items-start gap-4 inline-flex">
                  <div className="justify-end items-center gap-1 inline-flex">
                    <div className="w-[7px] h-[7px] bg-[#eb6a48] rounded-full"></div>
                    <div className=" text-black text-base font-semibold font-['Segoe UI']">
                     {t("artical")}
                    </div>
                  </div>
                  {recommendedArticles.map((article, index) => (
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
