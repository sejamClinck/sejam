import { Outlet } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
