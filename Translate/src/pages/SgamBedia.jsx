import {
  SharedHero,
  HeroSection,
  FilterSection,
  BlogSection,
} from "../components";
const SgamBedia = () => {
  return (
    <main>
      <SharedHero />

      <HeroSection />

      <div className="flex flex-col items-start p-[50px] max-sm:p-[10px]">

        <FilterSection />

        <BlogSection />

      </div>
    </main>
  );
};

export default SgamBedia;
