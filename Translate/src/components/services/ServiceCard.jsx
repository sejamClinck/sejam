import useSmallScreen from "../../hooks/useSmallScreen";

const ServiceCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed,
}) => {
  const isSmallScreen = useSmallScreen();

  const ContentSection = () => (
    <div className="basis-1/2 flex items-center justify-center">
      <div className="p-5 lg:p-0 text-start">
        <h3 className="text-[#292929] text-5xl font-bold leading-[62.40px] mb-4">
          {title}
        </h3>
        <p className="max-w-[543px] text-neutral-600 text-base font-bold leading-7 mx-auto">
          {description}
        </p>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="basis-1/2 flex justify-center items-center w-full">
      <img
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        className="max-w-full h-auto"
      />
    </div>
  );

  return (
    <div className="flex my-[200px]  max-sm:my-[100px] flex-col justify-center m-auto md:flex-row mb-[200px]">
      {!isSmallScreen ? (
        isReversed ? (
          <div className="flex  gap-[300px] items-center justify-between mb-[-100px] ">
            <ContentSection />
            <ImageSection />
          </div>
        ) : (
          <div className="flex gap-[300px]  items-center justify-between mb-[-100px] ">
            <ImageSection />
            <ContentSection />
          </div>
        )
      ) : (
        <div className="max-sm:mb-[-70px]">
          <ContentSection />
          <ImageSection />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
