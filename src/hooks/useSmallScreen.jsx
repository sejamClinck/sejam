import { useState, useEffect } from "react";

const useSmallScreen = (maxWidth = 768) => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= maxWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= maxWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxWidth]);

  return isSmallScreen;
};

export default useSmallScreen;
