import { useState } from "react";
import {
  ContactUs,
  HeaderLogo,
  ToggleBar,
  NavMenu,
  Translate,
} from "../../components";
import useSmallScreen from "../../hooks/useSmallScreen";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
const Header = () => {
  const isSmallScreen = useSmallScreen();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="Header w-full px-4 py-3 md:py-0 md:px-[50px] top-0 fixed bg-black/30 backdrop-blur-[20px] flex justify-between items-center z-40">
      <Link to="/">
        <HeaderLogo />{" "}
      </Link>
      <NavMenu /> {/* Desktop menu */}
      <div className="max-sm:absolute max-sm:top-15 max-sm:left-11 max-sm:ml-[10px]"></div>
      {isMenuOpen ? (
        <GrClose
          className="lg:hidden flex items-center text-white text-2xl rounded-full cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <div className="w-[100px] flex items-center justify-between mx-3">
          <Translate />
          <ToggleBar toggleMenu={toggleMenu} isOpen={isMenuOpen} />
        </div>
      )}
      <NavMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} isMobile />{" "}
      {/* Mobile menu */}
      {!isSmallScreen && <ContactUs />}
    </div>
  );
};

export default Header;
