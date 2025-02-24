import useSmallScreen from "../../hooks/useSmallScreen";
import StepDescription from "./StepDescription";
import StepImageSection from "./StepImageSection";

// Reusable Step Component
const Step = ({
  image,
  smallText,
  title,
  description,
  isImageFirst,
  service_id,
}) => {
  const isSmallScreen = useSmallScreen();

  return (
    <article className="flex gap-5 md:gap-[200px] flex-col md:flex-row">
      {!isSmallScreen ? (
        <>
          {isImageFirst ? (
            <>
              <StepImageSection image={image} title={title} />
              <StepDescription
                smallText={smallText}
                title={title}
                description={description}
                service_id={service_id}
              />
            </>
          ) : (
            <>
              <StepDescription
                smallText={smallText}
                title={title}
                description={description}
                service_id={service_id}
              />
              <StepImageSection image={image} title={title} />
            </>
          )}
        </>
      ) : (
        <>
          <StepImageSection image={image} title={title} />

          <StepDescription
            smallText={smallText}
            title={title}
            description={description}
            service_id={service_id}
          />
        </>
      )}
    </article>
  );
};

export default Step;
