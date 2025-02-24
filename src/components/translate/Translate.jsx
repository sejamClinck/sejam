// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";
// function Translate() {
//   const { t, i18n } = useTranslation("navbar"); // Use 'navbar' namespace

//   const changeLanguage = (lng) => {
//     i18next.changeLanguage(lng);
//   };

//   // Update the <html> lang and dir attributes based on the active language
//   useEffect(() => {
//     const currentLanguage = i18n.language || "en"; // Default to English if no language is set
//     const htmlElement = document.documentElement;

//     // Set lang and dir based on the current language
//     if (currentLanguage === "ar") {
//       htmlElement.setAttribute("lang", "ar");
//       htmlElement.setAttribute("dir", "rtl");
//     } else {
//       htmlElement.setAttribute("lang", "en");
//       htmlElement.setAttribute("dir", "ltr");
//     }
//   }, [i18n.language]); // Runs whenever the language changes
//   return (
//     <div>
//       <div className="relative bropdown">
//         <button
//           className="flex items-center rounded bg-[white]/0   px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
//           type="button"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
//           </svg>
//           <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
//             </svg>
//           </span>
//         </button>
//         <ul className="absolute hidden z-[1000] float-left m-0 p-3 min-w-max list-none  overflow-hidden rounded-lg  bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark dropdown-menu">
//           <li className="border-b-2">
//             <button
//               className="p-3 text-[black] bg-[red]/0 hover:bg-gray-300"
//               onClick={() => changeLanguage("ar")}
//             >
//               ar
//             </button>
//           </li>
//           <li>
//             <button
//               className="p-3 text-[black] bg-[red]/0 hover:bg-gray-300"
//               onClick={() => changeLanguage("en")}
//             >
//               en
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Translate;
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Translate() {
  const { i18n } = useTranslation("navbar"); // Use 'navbar' namespace
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Manage dropdown visibility

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    setIsDropdownVisible(false); // Close the dropdown after selection
  };

  // Update the <html> lang and dir attributes based on the active language
  useEffect(() => {
    const currentLanguage = i18n.language || "en"; // Default to English if no language is set
    const htmlElement = document.documentElement;

    // Set lang and dir based on the current language
    if (currentLanguage === "ar") {
      htmlElement.setAttribute("lang", "ar");
      htmlElement.setAttribute("dir", "rtl");
    } else {
      htmlElement.setAttribute("lang", "en");
      htmlElement.setAttribute("dir", "ltr");
    }
  }, [i18n.language]); // Runs whenever the language changes

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center rounded bg-transparent px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:outline-none focus:ring-0"
        type="button"
        onClick={toggleDropdown}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="ms-2 w-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
          </svg>
        </span>
      </button>

      {isDropdownVisible && (
        <ul className="absolute z-[1000] mt-2 min-w-max list-none overflow-hidden rounded-lg bg-white text-base shadow-lg dark:bg-surface-dark">
          <li className="border-b-2">
            <button
              className="p-3 w-full text-left text-[black] hover:bg-gray-300"
              onClick={() => changeLanguage("ar")}
            >
              Arabic (ar)
            </button>
          </li>
          <li>
            <button
              className="p-3 w-full text-left text-[black] hover:bg-gray-300"
              onClick={() => changeLanguage("en")}
            >
              English (en)
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Translate;
