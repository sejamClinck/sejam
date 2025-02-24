import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts";

import {
  Home,
  WhySgam,
  Doctors,
  DoctorInformation,
  Experiences,
  Kids,
  YourJourney,
  Services,
  SgamBedia,
  ErrorPage,
  JourneyStep,
  SgamBediaPost,
} from "./pages";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// Configure i18next
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
  });
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/why-sijam",
        element: <WhySgam />,
      },
      {
        path: "/our-doctors",
        element: <Doctors />,
      },
      {
        path: "/our-doctors/:doctorId",
        element: <DoctorInformation />,
      },
      {
        path: "/experiences",
        element: <Experiences />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/your-journey",
        element: <YourJourney />,
      },
      {
        path: "/your-journey/:stepId",
        element: <JourneyStep />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <SgamBedia />,
      },
      {
        path: "/blog/:postId",
        element: <SgamBediaPost />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
