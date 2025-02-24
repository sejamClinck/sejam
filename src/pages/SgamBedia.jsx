import { useState } from "react";
import {
  SharedHero,
  HeroSection,
  FilterSection,
  BlogSection,
} from "../components";

const SgamBedia = () => {
  // Define state to hold the filter criteria
  const [filter, setFilter] = useState("");

  return (
    <main>
      <SharedHero />
      <HeroSection />

      <div className="flex flex-col items-start p-[50px] max-sm:p-[10px]">
        {/* Pass setFilter function to update filter state */}
        <FilterSection setFilter={setFilter} />

        {/* Pass the filter state to the BlogSection */}
        <BlogSection filter={filter} />
      </div>
    </main>
  );
};

export default SgamBedia;
