import {
  SharedHero,
  StepsInformation,
  StepHeaderSection,
  // TeamImages,
} from "../components";

const JourneyStep = () => {
  return (
    <main>
      <SharedHero />

      <section aria-labelledby="step-header">
        <StepHeaderSection />
      </section>

      <section aria-labelledby="team-images-section" role="region">
        <h2 id="team-images-section" className="sr-only">
          Team Images
        </h2>
        {/* Team Images Section */}
        {/* <TeamImages /> */}
      </section>

      <section aria-labelledby="steps-information">
        <StepsInformation />
      </section>
    </main>
  );
};

export default JourneyStep;
