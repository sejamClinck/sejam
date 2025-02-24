import {
  FooterCopyRight,
  LeftShape,
  RightShape,
  FooterNavLinks,
  FooterContent,
} from "../../components";
// import DarkLogo from "../../assets/img/homeimages/logo_dark.png";
const Footer = () => {
  return (
    <footer className="Footer w-full h-auto relative bg-[#fef4f2] p-3 border-t-2 border-white overflow-hidden">
      <RightShape />

      <FooterNavLinks />
      <FooterContent />
      <FooterCopyRight />

      <LeftShape />
    </footer>
  );
};

export default Footer;

{
  /* <div classNameName="FooterContent w-full h-auto flex flex-col items-center justify-center gap-5">
        </div> */
}
