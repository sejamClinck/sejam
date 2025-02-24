import {
  Hero,
  // DoctorsSection,
  Contact,
  SectionOne,
  HomeSectionTwo,
  HomeSectionFour,
  HomeSectionFive,
  MapSection,
  CustomerReviews,
  HomeSectionThree,
  HomeSectionSix,
} from "../components";
import { Suspense } from "react";
import hero from "../assets/img/homeimages/hero.png";

const Home = () => {
  return (
    <div className="bg-[#fef4f2] ">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <Suspense fallback={<div>Loading translations...</div>}>
          <Hero />
        </Suspense>
      </div>

      <div className="p-4">
        <SectionOne />
        <HomeSectionTwo />
        <HomeSectionThree />
        <HomeSectionFour />
        <HomeSectionFive />
        <HomeSectionSix />
        <CustomerReviews />
        <MapSection />
        {/* <DoctorsSection /> */}
        <Contact />
      </div>
    </div>
  );
};

export default Home;
