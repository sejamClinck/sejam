// src/App.js
import { Suspense } from "react";
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
  SegamEnvironment,
  Services,
  ShowService,
  SgamBedia,
  ErrorPage,
  JourneyStep,
  SgamBediaPost,
} from "./pages";
import "./i18n"; // Ensure this import is present to initialize i18next
import loader from "./assets/img/loader/loader.gif";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/why-sijam", element: <WhySgam /> },
      { path: "/our-doctors", element: <Doctors /> },
      { path: "/our-doctors/:doctorId", element: <DoctorInformation /> },
      { path: "/experiences", element: <Experiences /> },
      { path: "/kids", element: <Kids /> },
      { path: "/your-journey", element: <YourJourney /> },
      { path: "/segam-environment", element: <SegamEnvironment /> },
      { path: "/your-journey/:stepId", element: <JourneyStep /> },
      { path: "/services", element: <Services /> },
      { path: "/service/:service_id", element: <ShowService /> },
      { path: "/blog", element: <SgamBedia /> },
      { path: "/blog/:postId", element: <SgamBediaPost /> },
    ],
  },
]);

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[100vh] flex items-center justify-center">
          <img src={loader} alt="loading.." />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
