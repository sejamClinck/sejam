import TagsContainer from "./TagsContainer";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const KeyWordsContainer = () => {
  const { t } = useTranslation("sgamBedia");
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
  const [activeKeyword, setActiveKeyword] = useState(null);
  return (
    <div className="bg-white rounded-[15px] flex-col justify-start items-start gap-5 inline-flex">
      <div className="self-stretch p-5 flex-col justify-start items-start gap-4 flex">
        <div className="justify-end items-center gap-1 inline-flex">
          <div className="w-[7px] h-[7px] bg-[#eb6a48] rounded-full"></div>
          <div className="text-right text-black text-base font-semibold font-['Segoe UI']">
            {t("words-main")}
          </div>
        </div>

        <TagsContainer
          keywords={keywords}
          setActiveKeyword={setActiveKeyword}
          activeKeyword={activeKeyword}
        />
      </div>
    </div>
  );
};

export default KeyWordsContainer;
