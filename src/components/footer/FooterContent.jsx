import SgamInfo from "./SgamInfo";
import Location from "./Location";
import SocialMedia from "./SocialMedia";

const FooterContent = () => {
  return (
    <div className="footer-container w-full max-w-[1095px] mx-auto mt-[179px] flex flex-col md:flex-row justify-between items-start">
      <SgamInfo />
      <div className="footer-details flex flex-col md:flex-row justify-start items-start gap-[70px]">
        <Location />
        <SocialMedia />
      </div>
    </div>
  );
};

export default FooterContent;
