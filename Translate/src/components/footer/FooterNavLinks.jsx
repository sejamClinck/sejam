import { Link } from "react-router-dom";
import { menuItems } from "../../utils/navigationLinks";

const FooterNavLinks = () => {
  return (
    <nav className="footer-nav w-full absolute left-0 top-0 border-b border-[#ebebeb] flex justify-center items-center gap-2.5 flex-wrap">
      <ul className="footer-nav-list flex justify-center items-center gap-5">
        {menuItems.map((link, index) => (
          <li key={index} className="hidden md:flex footer-nav-item px-2.5 py-[30px]">
            <Link
              to={link.path}
              className="footer-nav-link text-right text-[#292929] text-base font-normal font-segoe-ui"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavLinks;
