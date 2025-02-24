import Star from "../../assets/img/whySegam/star.svg";
import room from "../../assets/img/whySegam/room.png";
import smallRoom from "../../assets/img/whySegam/smal-room.png";
import groupPeople from "../../assets/img/whySegam/groub-peoble.png";
import baseStar from "../../assets/img/whySegam/base-star.svg";
import { useTranslation } from "react-i18next";
const WhySgamSectionOne = () => {
  const { t } = useTranslation("whaySegam");
  const stats = [
    {
      title: t("s1-title1"),
      description: t("s1-description1"),
      icon: groupPeople,
      value: "5000+",
      alt: "Icon representing happy clients",
    },
    {
      title: t("s1-title2"),
      description: t("s1-description2"),
      icon: baseStar,
      value: "10+",
      alt: "Icon representing 10+ years of experience",
    },
    {
      title: t("s1-title3"),
      description: t("s1-description3"),
      icon: Star,
      value: "4.9/5",
      alt: "Star icon representing high ratings",
    },
  ];

  return (
    <section
      className="relative max-w-8xl md:mx-10  mx-auto px-5 md:px-4 rounded-t-2xl bg-white p-3 mt-[-80px]"
      aria-labelledby="why-choose-sgam-heading"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="md:w-2/3 p-3">
          <h2
            id="why-choose-sgam-heading"
            className=" text-[#1e282e] text-4xl font-semibold mb-4"
          >
           {t("s1-whay")}
          </h2>
          <p className=" text-[#3d3d3d] text-base leading-relaxed mb-10">
          {t("s1-slug")}
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            {stats.map((stat, index) => (
              <article
                key={index}
                className="flex-1 bg-[#fef4f2] p-3 rounded-lg"
                aria-labelledby={`stat-title-${index}`}
              >
                <div className="flex items-center justify-end gap-2">
                  <div className="w-[70px] h-[70px] bg-white rounded-[10px] flex flex-col items-center justify-center">
                    <img
                      src={stat.icon}
                      alt={stat.alt}
                      className="w-[30px] h-[30px] mb-1"
                    />
                    <span className="text-[#44170b] text-[15px] font-bold">
                      {stat.value}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3
                      id={`stat-title-${index}`}
                      className=" text-[#292929] text-[15px] font-bold leading-normal"
                    >
                      {stat.title}
                    </h3>
                    <p className=" text-[#656565] text-xs leading-tight">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="md:w-1/3 p-3 flex items-center gap-5 justify-end">
          <img
            src={smallRoom}
            alt="A small dental room"
            className="w-1/2 h-auto"
          />
          <img src={room} alt="A large dental room" className="w-1/2 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default WhySgamSectionOne;
