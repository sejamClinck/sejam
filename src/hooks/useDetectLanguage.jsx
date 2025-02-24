import { useState, useEffect } from "react";

function useLanguage() {
  const [languageInfo, setLanguageInfo] = useState({
    primaryLanguage: "",
    allLanguages: [],
    navigatorLanguage: "",
    documentLanguage: "",
  });

  useEffect(() => {
    const detectLanguage = () => {
      const navigatorLang = navigator.language || navigator.userLanguage || "";
      const allLangs = navigator.languages || [navigatorLang];
      const documentLang = document.documentElement.lang || "";

      console.log("Navigator language:", navigatorLang);
      console.log("All languages:", allLangs);
      console.log("Document language:", documentLang);

      setLanguageInfo({
        primaryLanguage: allLangs[0] || navigatorLang,
        allLanguages: allLangs,
        navigatorLanguage: navigatorLang,
        documentLanguage: documentLang,
      });
    };

    detectLanguage();
    window.addEventListener("languagechange", detectLanguage);

    return () => {
      window.removeEventListener("languagechange", detectLanguage);
    };
  }, []);

  return languageInfo;
}

export default useLanguage;
