import {
  SharedHero,
  ServicesSectionTwo,
  ServicesSectionOne,
} from "../components";

// Using React.Fragment (shorthand with <>) for cleaner code structure
const Services = () => {
  return (
    <>
      {/* Main wrapper */}
      <main>
        {/* Overlay Section - Hero */}
        <SharedHero />

        {/* Section 1: Introduction and Service Overview */}
        <section aria-labelledby="services-introduction">
          <ServicesSectionOne />
        </section>

        {/* Section 2: Detailed Services */}
        <section aria-labelledby="services-details">
          <ServicesSectionTwo />
        </section>
      </main>
    </>
  );
};

export default Services;
