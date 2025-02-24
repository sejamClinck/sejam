import { HeaderPhoneLink } from "../../controllers";
import { navigationLinks } from "./navigationLinks";
const MobileHeaderLinks = () => {
  return (
    <div
      id="mobile-menu"
      className="hidden flex-col space-y-2 md:hidden absolute top-full right-0 bg-black/95 backdrop-blur-[10px] w-full px-6 py-4"
    >
      {console.log(navigationLinks)}
      {navigationLinks.map((link) => (
        <HeaderPhoneLink key={link.path} link={link} />
      ))}
    </div>
  );
};
export default MobileHeaderLinks;
