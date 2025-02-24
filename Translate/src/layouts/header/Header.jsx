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
const Header = () => {
  const isSmallScreen = useSmallScreen();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="Header w-full px-4 py-3 md:py-0 md:px-[50px] top-0 fixed bg-black/30 backdrop-blur-[20px] flex justify-between items-center z-40">
      <HeaderLogo />
      <div className="max-sm:absolute max-sm:top-15 max-sm:left-11 max-sm:ml-[10px]">
        <Translate />
      </div>
      {isMenuOpen ? (
        <GrClose
          className="lg:hidden flex items-center text-white text-2xl rounded-full cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <ToggleBar toggleMenu={toggleMenu} isOpen={isMenuOpen} />
      )}
      <NavMenu /> {/* Desktop menu */}
      <NavMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} isMobile />{" "}
      {/* Mobile menu */}
      {!isSmallScreen && <ContactUs />}
    </div>
  );
};

export default Header;
