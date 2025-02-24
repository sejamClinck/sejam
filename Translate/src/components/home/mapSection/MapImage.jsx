// import { FaMapMarkedAlt } from "react-icons/fa";

// const MapImage = ({ mapImage }) => {
//   return (
//     <div className=" map relative w-full max-sm:h-[350px] h-[600px]">
//       <img
//         src={mapImage}
//         alt="Image map showing nearby locations"
//         className="w-[100%] h-full object-cover relative"
//       />

//       <FaMapMarkedAlt
//         class
//         name="absolute top-[50%] left-[50%] right-0 bottom-0 m-auto text-[red] w-10 h-10"
//       />
//     </div>
//   );
// };

// export default MapImage;

import { FaMapMarkedAlt } from "react-icons/fa";

const MapImage = ({ mapImage, mapLocation, altText }) => {
  return (
    <div className="map relative w-full max-sm:h-[350px] h-[600px]">
      <img
        src={mapImage}
        alt={altText || "Map showing nearby locations"}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <a
        href={mapLocation}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        aria-label="Open location in Google Maps"
      >
        <FaMapMarkedAlt
          className="text-blue-600 w-10 h-10 drop-shadow-lg"
          aria-hidden="true"
        />
        <span className="sr-only">Visit our location on Google Maps</span>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 p-2 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Visit our location on Google Maps
        </span>
      </a>
    </div>
  );
};

export default MapImage;
