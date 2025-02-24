import {
  SharedHero,
  WhySgamSectionOne,
  WhySgamSectionTwo,
} from "../components";

const WhySgam = () => {
  return (
    <div className="mb-20 ">
      {/* Overlay Section */}
      <section className="z-10" aria-labelledby="overlay-heading">
        <h2 id="overlay-heading" className="sr-only">
          Why SGAM Overlay
        </h2>
        <SharedHero />
      </section>

      {/* First Section */}
      <section className="z-50" aria-labelledby="section-one-heading">
        <h2 id="section-one-heading" className="sr-only">
          Why Choose SGAM - Section One
        </h2>
        <WhySgamSectionOne />
      </section>

      {/* Second Section */}
      <section aria-labelledby="section-two-heading">
        <h2 id="section-two-heading" className="sr-only">
          Why Choose SGAM - Section Two
        </h2>
        <WhySgamSectionTwo />
      </section>
    </div>
  );
};

export default WhySgam;
