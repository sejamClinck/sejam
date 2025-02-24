import { useEffect, useState } from "react";
import smile from "../../assets/img/homeimages/smile.png";
import smileWomman from "../../assets/img/homeimages/smail-weman.png";
import star1 from "../../assets/img/homeimages/Star1.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation("home"); // Use 'home' namespace
  const [h1Text, setH1Text] = useState(t("s1-wecare")); // State for H1 text
  const [h2Text, setH2Text] = useState(t("s1-smile")); // State for H2 text

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 30 }, // Text hidden below
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeInOut", // Add easing for smooth animation
      },
    },
    exit: {
      opacity: 0,
      y: -30, // Move up on exit
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
  };

  // Handle text switching every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setH1Text((prev) =>
        prev === t("s1-wecare") ? t("s1-smile") : t("s1-wecare")
      );
      setH2Text((prev) =>
        prev === t("s1-smile") ? t("s1-honer") : t("s1-smile")
      );
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [t]);

  return (
    <section className="transform-translate-y-1/2 mx-[10px] md:mx-[100px]  max-w-full md:max-w-[500px] p-4 z-0">
      <header className="mt-[200px] md:mt-[250px] w-[100px] md:w-[160px] Frame21 flex flex-col space-y-4 gap-4">
        <div className="flex items-center gap-4 sm:gap-10">
          <motion.h1
            className="text-white text-[45px] md:text-[77px]  max-sm:text-[35px] font-bold"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={textVariants}
            key={`h1-${h1Text}`} // Re-render on text change
          >
            {h1Text}
          </motion.h1>
          <motion.img
            className=" h-auto rounded-[323.23px]"
            src={smile}
            alt="ابتسامتك - Smile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
        <div className="flex items-center gap-4 sm:gap-10">
          <motion.img
            className=" h-auto rounded-[323.23px]"
            src={smileWomman}
            alt="أمــــــــانتنا - Our Trust"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }} // Stagger the second image
          />
          <motion.h2
            className="text-white text-[45px] md:text-[77px]  max-sm:text-[35px] font-bold"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={textVariants}
            key={`h2-${h2Text}`} // Re-render on text change
          >
            {h2Text}
          </motion.h2>
        </div>
      </header>

      <motion.p
        className="text-[#dcdcdc] text-sm md:text-xl leading-loose mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      >
        {t("s1-slug")}
      </motion.p>

      <motion.div
        className="Frame14 w-[150px] md:w-[150px] h-[40px] p-2 bg-[#FAB5A3] rounded-full mt-5 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
      >
        <img className="mb-[-10px]" src={star1} alt="Star decoration" />
        <a
          href="#content-form"
          className="text-[#EB6A48] text-sm font-semibold mx-3"
        >
          {t("s1-serve-now")}
        </a>
        <img className="mt-[-10px]" src={star1} alt="Star decoration" />
      </motion.div>
    </section>
  );
};

export default Hero;
