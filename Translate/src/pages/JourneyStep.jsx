
import { SharedHero, StepsInformation, StepHeaderSection } from "../components";

const JourneyStep = () => {
  return (
    <main>
  
      <SharedHero />

      <section aria-labelledby="step-header">
        <StepHeaderSection />
      </section>
     
      <section aria-labelledby="steps-information">
        <StepsInformation />
      </section>
    </main>
  );
};

export default JourneyStep;
