// src/i18n.js
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// Initialize i18next
i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // Passes i18next to react-i18next
  .init({
    supportedLngs: ["en", "ar"], // Define supported languages
    fallbackLng: "en", // Fallback language
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "navigator",
        "querystring",
        "path",
        "subdomain",
      ],
      caches: ["cookie"], // Cache the language
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to your translation files
    },
    react: {
      useSuspense: true, // Enable Suspense
    },
  });

export default i18next;
