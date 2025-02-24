import {
  SharedHero,
  OurTeam,
  DoctorsInformation,
  TeamImages,
} from "../components";
const Doctors = () => {
  return (
    <main className="mb-32">
      <SharedHero />

      <OurTeam />

      <TeamImages />

      <DoctorsInformation />
    </main>
  );
};

export default Doctors;
