import { NavLink } from "react-router-dom";

const HeaderLink = ({ pathTo, linkText }) => {
  return (
    <div
      className="LinkHeader px-2.5 py-6 border-b-2 border-[#eb6a48] flex items-center gap-2.5"
      role="listitem" // Makes it clear this is an item in a list
    >
      <NavLink
        to={pathTo}
        className="text-white text-base"
        aria-label={linkText} // Adds an accessible label for screen readers
        activeClassName="font-bold" // Optional: Highlight active link
      >
        {linkText}
      </NavLink>
      <div
        className="w-[7px] h-[7px] bg-[#eb6a48] rounded-full"
        aria-hidden="true" // Decorative element, not for screen readers
      ></div>
    </div>
  );
};

export default HeaderLink;
