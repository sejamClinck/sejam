import KeywordTag from "./KewordTag";

const TagsContainer = ({ keywords, setActiveKeyword, activeKeyword }) => {
  const handleKeywordClick = (keyword) => {
    setActiveKeyword(keyword === activeKeyword ? null : keyword);
  };
  return (
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
  );
};

export default TagsContainer;
