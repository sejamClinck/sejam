import {
  SharedHero,
  OurTeam,
  DoctorsInformation,
  TeamImages,
} from "../components";

const Doctors = () => {
  return (
    <main className="mb-32" role="main" aria-label="Doctors Page">
      <section aria-labelledby="shared-hero-section">
        {/* Hero Section */}
        <SharedHero />
      </section>

      <section aria-labelledby="our-team-section">
        <h2 id="our-team-section" className="sr-only">
          Our Team
        </h2>
        {/* Our Team Section */}
        <OurTeam />
      </section>

      <section aria-labelledby="team-images-section" role="region">
        <h2 id="team-images-section" className="sr-only">
          Team Images
        </h2>
        {/* Team Images Section */}
        <TeamImages />
      </section>

      <section aria-labelledby="doctors-information-section">
        <h2 id="doctors-information-section" className="sr-only">
          Doctors Information
        </h2>
        {/* Doctors Information Section */}
        <DoctorsInformation />
      </section>
    </main>
  );
};

export default Doctors;
