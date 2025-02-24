import imagemnap from "../../assets/img/homeimages/imagemap.png";
import { locations } from "../../utils/websiteInformation";

import MapImage from "./mapSection/MapImage";
import MapContent from "./mapSection/MapContent";

const locationInformation = {
  locationOne: {
    image: imagemnap,
    locationLink: locations.firstLocation.mapLink,
  },
};

import { useState } from "react";
const MapSection = () => {
  const [activeImage, setActiveImage] = useState(
    locationInformation.locationOne.image
  );
  const [mapLocation, setMapLocation] = useState(
    locationInformation.locationOne.locationLink
  );
  return (
    <section className="p-[10px] sm:p-[100px]">
      <div className="container w-full max-w-[11768px] m-auto rounded-[30px] overflow-hidden">
        <MapContent
          setActiveImage={setActiveImage}
          setMapLocation={setMapLocation}
        />

        <MapImage mapImage={activeImage} mapLocation={mapLocation} />
      </div>
    </section>
  );
};

export default MapSection;
