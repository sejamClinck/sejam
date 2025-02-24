import hero from "../../assets/img/whySegam/hero.png";
import darkLogo from "../../assets/img/homeimages/logo_dark.png";
const Hero = () => {
  return (
    <section
      className="hero relative w-full h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
      aria-label="Hero section with company logo"
    >
      <div className="absolute inset-0 h-full bg-gradient-to-b from-white/0 to-white/100"></div>
      <header className="w-full px-4 py-3 md:py-0 md:px-[50px] absolute top-0">
        {/* Add navigation or other header content here */}
      </header>
      <div className="flex items-center justify-center h-full">
        <img
          className="max-w-full h-auto z-50"
          src={darkLogo}
          alt="Company logo"
          width="200"
          height="100"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
