// import soady from "../../../assets/img/homeimages/soady.png";

import SecondaryImageSection from "./SecondaryImageSection";
import MainImageSection from "./MainImageSection";
const SectionFIveSwapper = () => {
  return (
    <div className="self-stretch flex flex-col lg:flex-row justify-between gap-10 lg:gap-5 rounded-[20px]">
      <MainImageSection />
      <SecondaryImageSection />
    </div>
  );
};

export default SectionFIveSwapper;
