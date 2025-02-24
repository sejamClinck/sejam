import { useEffect, useState } from "react";
import axios from "axios";
import ServiceSlider from "./ServiceSlider";
import { useTranslation } from "react-i18next";
import loader from "../../assets/img/loader/loader.gif";
const HomeSectionFour = () => {
  const { t, i18n } = useTranslation("home"); // Use 'home' titlespace
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch services from the API
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://sijamdashboard.com/api/services", {
          params: {
            lang: i18n.language, // Pass active language as a query parameter
          },
        });
        setServices(response.data.data); // Set the services data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [i18n.language]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <img className="w-[50px]" src={loader} alt="loading..." />
      </div>
    );
  }

  if (error) {
    return <div className="flex items-center justify-center">{error}</div>;
  }
  return <ServiceSlider services={services} title={t("s5-title")} />;
};

export default HomeSectionFour;
