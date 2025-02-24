import topmap from "../../../assets/img/homeimages/topmapsection.png";
import { locations } from "../../../utils/websiteInformation";
import imagemnap from "../../../assets/img/homeimages/imagemap.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const locationInformation = {
  locationOne: {
    image: imagemnap,
    locationLink: locations.firstLocation.mapLink,
  },
  locationTwo: {
    image: imagemnap,
    locationLink: locations.secondLocation.mapLink,
  },
};

const MapContent = ({ setActiveImage, setMapLocation }) => {
  const { t } = useTranslation("home");
  const [activeButton, setActiveButton] = useState("first");

  return (
    <div className="top flex gap-4 flex-col justify-end sm:justify-center items-center text-center w-[100%] max-h-[250px] h-[400px] relative">
      <img
        src={topmap}
        alt="Top map section showing locations"
        className="w-full absolute h-full object-cover"
      />

      <div className="content translate-y-[-20px] p-[10px] relative top-0 left-0 translate-x-0">
        <h1 className="sm:text-[40px] text-[30px] font-bold" aria-live="polite">
          {t("s10-title")}!
        </h1>
        <p aria-live="polite">{t("s10-slug")}</p>
      </div>

      <div className="mainBtn flex items-center gap-3 z-10 translate-y-[-20px]">
        <button
          onClick={() => {
            setActiveImage(locationInformation.locationOne.image);
            setMapLocation(locationInformation.locationOne.locationLink);
            setActiveButton("first");
          }}
          className={`h-10 px-6 py-3 ${
            activeButton === "first" ? "bg-[#eb6a48]" : "bg-[#507a8a]"
          } rounded-full border border-white flex items-center justify-center text-white text-sm font-normal font-['Segoe UI'] hover:bg-[#d55a3a] transition-colors duration-300`}
          aria-label={`Visit الفرع الأول at ${locations.firstLocation.address}`}
        >
          {t("s10-branch1")}
        </button>
        <button
          onClick={() => {
            setActiveImage(locationInformation.locationTwo.image);
            setMapLocation(locationInformation.locationTwo.locationLink);
            setActiveButton("second");
          }}
          className={`h-10 px-6 py-3 ${
            activeButton === "second" ? "bg-[#eb6a48]" : " bg-[#507a8a]"
          }
           rounded-full border border-white flex items-center justify-center text-white text-sm font-normal font-['Segoe UI'] hover:bg-[#d55a3a] transition-colors duration-300`}
          aria-label={`Visit الفرع الثاني at ${locations.secondLocation.address}`}
        >
          {t("s10-branch2")}
        </button>
      </div>
    </div>
  );
};

//bg-[#eb6a48]
//bg-[#507a8a]
export default MapContent;

{
  /* <div className="flex gap-4 mt-4">
        <a
          href={locations.firstLocation.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 px-5 py-2 bg-[#507a8a] rounded-full flex items-center justify-center text-white text-xs font-normal font-['Segoe UI']"
          aria-label={`Visit الفرع الثاني at ${locations.firstLocation.address}`}
        >
          الفرع الثاني
        </a>
        <a
          href={locations.secondLocation.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 px-6 py-3 bg-[#eb6a48] rounded-full border border-white flex items-center justify-center text-white text-sm font-normal font-['Segoe UI']"
          aria-label={`Visit الفرع الأول at ${locations.secondLocation.address}`}
        >
          الفرع الأول
        </a>
      </div> */
}
