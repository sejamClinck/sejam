import logo from "../../assets/img/homeimages/logo.png";

const HeaderLogo = () => {
  return (
    <div className="flex items-center">
      <img
        className="w-[120px] md:w-[187px] h-auto"
        src={logo}
        alt="Company Logo"
        aria-label="Company Logo"
      />
    </div>
  );
};

export default HeaderLogo;
