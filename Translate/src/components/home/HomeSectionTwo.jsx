import useSmallScreen from "../../hooks/useSmallScreen";
import ImageSection from "./sectionTow/ImageSection";
import TextSection from "./sectionTow/TextSection";
const HomeSectionTwo = () => {
  const isSmallScreen = useSmallScreen();
  return (
    <section
      className="px-0 lg:px-[200px] mt-10"
      aria-labelledby="section-title"
    >
      <div className="flex items-center justify-between max-sm:flex-col ">
        {!isSmallScreen && (
          <>
            <ImageSection />
            <TextSection />
          </>
        )}
        {isSmallScreen && (
          <>
            <TextSection />
            <ImageSection />
          </>
        )}
      </div>
    </section>
  );
};

export default HomeSectionTwo;
