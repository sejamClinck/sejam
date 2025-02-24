import teeth1 from "../../assets/img/homeimages/teeth1.png";
import teeth2 from "../../assets/img/homeimages/teeth2.png";
import teeth3 from "../../assets/img/homeimages/teeth3.png";
import teeth4 from "../../assets/img/homeimages/teeth4.png";
import teeth5 from "../../assets/img/homeimages/teeth5.png";
import teeth6 from "../../assets/img/homeimages/teeth6.png";
import teeth7 from "../../assets/img/homeimages/teeth7.png";
import teeth8 from "../../assets/img/homeimages/teeth8.png";
import ServiceSlider from "./ServiceSlider";
import { useTranslation } from "react-i18next";

const HomeSectionFour = () => {
  const { t } = useTranslation("home"); // Use 'home' namespace
  const services = [
    { name: t("s5-teeth1"), image: teeth1 },
    { name: t("s5-teeth2"), image: teeth2 },
    { name: t("s5-teeth3"), image: teeth3 },
    { name: t("s5-teeth4"), image: teeth4 },
    { name: t("s5-teeth5"), image: teeth5 },
    { name: t("s5-teeth6"), image: teeth6 },
    { name: t("s5-teeth7"), image: teeth7 },
    { name: t("s5-teeth8"), image: teeth8 },
    { name: t("s5-teeth1"), image: teeth1 },
    { name: t("s5-teeth2"), image: teeth2 },
    { name: t("s5-teeth3"), image: teeth3 },
    { name: t("s5-teeth4"), image: teeth4 },
    { name: t("s5-teeth5"), image: teeth5 },
    { name: t("s5-teeth6"), image: teeth6 },
    { name: t("s5-teeth7"), image: teeth7 },
    { name: t("s5-teeth8"), image: teeth8 },
  ];

  return <ServiceSlider services={services} title={t("s5-title")} />;
};

export default HomeSectionFour;
