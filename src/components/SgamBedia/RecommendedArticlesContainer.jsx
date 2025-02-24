import { useTranslation } from "react-i18next";

import RecommendedArticle from "./RecommendedArticle";
const RecommendedArticlesContainer = ({ recommendedArticles }) => {
  const { t } = useTranslation("sgamBedia");

  return (
    <div className="w-full bg-white rounded-[15px] flex-col justify-start items-start gap-5 inline-flex mt-5">
      <div className="self-stretch flex-col justify-start items-start gap-4 flex">
        <div className="h-[349px] p-5 flex-col justify-start items-start gap-4 inline-flex">
          <div className="justify-end items-center gap-1 inline-flex">
            <div className="w-[7px] h-[7px] bg-[#eb6a48] rounded-full"></div>
            <div className="text-right text-black text-base font-semibold font-['Segoe UI']">
            {t("artical")}
            </div>
          </div>
          {recommendedArticles.map((article, index) => (
            <RecommendedArticle key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedArticlesContainer;
