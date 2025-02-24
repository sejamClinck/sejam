import { SharedHero, PostHeaderSection, Swapper } from "../components";
import banner from "../assets/img/showPost/banner.png";
import KeywordTag from "../components/SgamBedia/KewordTag";
import RecommendedArticle from "../components/SgamBedia/RecommendedArticle";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const SgamBediaPost = () => {
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
    <main className="">
      <SharedHero />
      <PostHeaderSection />

      <section>
        <div className="max-w-8xl mx-auto px-2 md:px-10 my-[50px] flex flex-col items-center justify-center mt-5">
          <div className="flex gap-5 w-full md:flex-row flex-col">
            <div className="basis-2/3 bg-white rounded-2xl p-3">
              <div className=" text-right text-[#292929] text-xl font-bold font-['Segoe UI']">
                {t("content")}
              </div>
              <div className=" my-3 text-right text-[#656565] text-base font-normal font-['Segoe UI']">
               {t("description")}
              </div>
              <div className=" my-3 text-right text-[#292929] text-xl font-bold font-['Segoe UI']">
                {t("content-artical")}
              </div>
              <div className=" my-3 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-right text-[#292929] text-xl font-semibold font-['Segoe UI']">
                  1. تنظيف الأسنان بالفرشاة مرتين يوميًا
                </div>
                <div className="self-stretch text-right text-[#656565] text-base font-normal font-['Segoe UI']">
                  احرص على تنظيف أسنانك بالفرشاة مرتين يوميًا على الأقل، صباحًا
                  ومساءً. استخدم فرشاة ناعمة ومعجون أسنان يحتوي على الفلورايد.
                  احرص على تنظيف جميع الأسطح، بما في ذلك الجوانب الخلفية للأسنان
                  وأسطح المضغ. قم بتنظيف أسنانك لمدة دقيقتين على الأقل في كل
                  مرة.
                </div>
              </div>
              <img className=" my-3 rounded-[20px] " src={banner} />
              <div className=" my-3 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-right text-[#292929] text-xl font-semibold font-['Segoe UI']">
                  2. استخدام خيط الأسنان يوميًا
                </div>
                <div className="self-stretch text-right text-[#656565] text-base font-normal font-['Segoe UI']">
                  خيط الأسنان يساعد في إزالة البلاك وبقايا الطعام التي قد تتراكم
                  بين الأسنان، حيث لا تصل الفرشاة. استخدم خيط الأسنان مرة واحدة
                  يوميًا، ويفضل قبل النوم. تأكد من التنظيف بلطف لتجنب إصابة
                  اللثة.
                </div>
              </div>
              <div className=" my-3 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-right text-[#292929] text-xl font-semibold font-['Segoe UI']">
                  3. الغرغرة بمحلول فموي
                </div>
                <div className="self-stretch text-right text-[#656565] text-base font-normal font-['Segoe UI']">
                  استخدام محلول فموي مضاد للبكتيريا يمكن أن يساعد في قتل
                  الجراثيم التي تسبب تسوس الأسنان وأمراض اللثة. استخدم الغرغرة
                  مرة يوميًا بعد تنظيف الأسنان بالفرشاة وخيط الأسنان.
                </div>
              </div>
              <div className=" my-3 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-right text-[#292929] text-xl font-semibold font-['Segoe UI']">
                  4. اختيار الأطعمة الصحية
                </div>
                <div className="self-stretch text-right text-[#656565] text-base font-normal font-['Segoe UI']">
                  تناول الأطعمة الغنية بالكالسيوم والفوسفور، مثل الألبان
                  والمكسرات، لتعزيز قوة مينا الأسنان. تجنب الأطعمة السكرية
                  والحمضية التي قد تؤدي إلى تآكل المينا وتسوس الأسنان. احرص على
                  شرب الماء بانتظام للحفاظ على ترطيب الفم والتخلص من بقايا
                  الطعام.
                </div>
              </div>
              <div className="  flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-right text-[#292929] text-xl font-semibold font-['Segoe UI']">
                  زيارة طبيب الأسنان بانتظام
                </div>
                <div className="self-stretch text-right text-[#656565] text-base font-normal font-['Segoe UI']">
                  احرص على زيارة طبيب الأسنان مرتين في السنة على الأقل لفحص شامل
                  وتنظيف احترافي. الفحص الدوري يساعد في اكتشاف مشاكل الأسنان
                  مبكرًا ويضمن علاجها في الوقت المناسب.
                </div>
              </div>

              <Swapper />
            </div>

            <div className="basis-1/3 bg-[#f6f6f6] p-3 rounded-2xl">
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
                <div className="self-stretch p-5 flex-col justify-start items-start gap-4 flex">
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
    </main>
  );
};

export default SgamBediaPost;
