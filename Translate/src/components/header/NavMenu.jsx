import { NavLink } from "react-router-dom";
import { menuItems } from "../../utils/navigationLinks";
import { whatsAppLink } from "../../utils/websiteInformation";

const NavMenu = ({ isMobile = false, isMenuOpen, toggleMenu }) => {
  const containerClasses = isMobile
    ? `flex flex-col space-y-2 md:hidden absolute top-full right-0 bg-black/95 backdrop-blur-[10px] w-full px-6 py-4 ${
        isMenuOpen ? "" : "hidden"
      }`
    : "hidden lg:flex lg:space-x-4";

  return (
    <nav
      className={containerClasses}
      id={isMobile ? "mobile-menu" : "desktop-menu"}
      aria-label={
        isMobile ? "Mobile navigation menu" : "Desktop navigation menu"
      }
    >
      <>
        {" "}
        {menuItems.map(({ text, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => `
            LinkHeader px-2.5 ${isMobile ? "py-2" : "py-6"}
            ${isActive ? "border-b-2 border-[#eb6a48]" : ""}
            flex items-center gap-2.5 relative
            group transition duration-300 ease-in-out
          `}
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            onClick={() => isMobile && toggleMenu()}
          >
            {({ isActive }) => (
              <>
                <div
                  className={`w-[7px] h-[7px] ${
                    isActive ? "bg-[#eb6a48]" : "bg-transparent"
                  } rounded-full`}
                  aria-hidden="true"
                />
                <div
                  className={`
                  absolute bottom-0 left-0 w-full h-0.5 bg-[#eb6a48]
                  transform scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300 ease-in-out
                  ${isActive ? "scale-x-100" : ""}
                `}
                  aria-hidden="true"
                />
                <div className="text-white text-base">{text}</div>
              </>
            )}
          </NavLink>
        ))}
        {isMobile && (
          <a
            className="w-full px-4 py-2 bg-[#eb6a48] text-white rounded-full font-semibold hover:bg-[#d55a3a] transition-colors duration-300 text-center"
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            الاتصال بنا
          </a>
        )}
      </>
    </nav>
  );
};
export default NavMenu;
