import {
  SharedHero,
  EnvironmentSectionOne,
  TeamImages
} from "../components";

const SegamEnvironment = () => {
  return (
    <main className="mb-32">
      <SharedHero />
      <EnvironmentSectionOne />
      <section aria-labelledby="team-images-section" role="region">
        <h2 id="team-images-section" className="sr-only">
          Team Images
        </h2>
        {/* Team Images Section */}
        <TeamImages />
      </section>
    </main>
  );
};

export default SegamEnvironment;
