import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "./ServiceCard";
import loader from "../../assets/img/loader/loader.gif";

const ServicesSectionTwo = () => {
  const { i18n } = useTranslation(); // Get the current language from i18next
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
  }, [i18n.language]); // Re-run when language changes

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <img className="w-[50px]" src={loader} alt="" />
      </div>
    );
  }

  if (error) {
    return <div className="flex items-center justify-center text-red-400">{error}</div>;
  }
  return (
    <section className="mb-15" aria-labelledby="services-heading">
      <h2 id="services-heading" className="sr-only">
        Dental Services We Offer
      </h2>
      <div className="max-w-[1400px] mx-auto mt-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            service_id={service.service_id}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            isReversed={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSectionTwo;
