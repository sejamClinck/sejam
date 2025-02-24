import Step from "./Step";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // to get the id from the URL
import { useTranslation } from "react-i18next";
import axios from "axios";
import loader from "../../assets/img/loader/loader.gif";

// StepsInformation Component
const StepsInformation = () => {
  const { i18n } = useTranslation("journeyStep");
  const { stepId } = useParams(); // Get the stepId from the URL
  const [journey, setJourney] = useState(null); // Singular journey object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get the current language from i18next
    const currentLang = i18n.language || "en"; // Default to 'en' if no language is set

    // Fetch the specific journey from the API using the stepId and language
    const fetchJourney = async () => {
      try {
        const response = await axios.get(
          `https://sijamdashboard.com/api/journeys/${stepId}?lang=${currentLang}`
        );
        setJourney(response.data.data.details);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJourney();
  }, [stepId, i18n.language]); // Dependency array with stepId and language

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <img className="w-[50px]" src={loader} alt="loading..." />
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  if (!journey)
    return (
      <p className="flex items-center justify-center text-red-500">
        No data available for this journey.
      </p>
    );

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-10 my-10">
      {/* Render the Step component */}
      {Array.isArray(journey) ? (
        journey.map((step, index) => (
          <Step
            key={index}
            number={index + 1}
            title={step.title}
            description={step.more_details}
            imageSrc={step.image}
            altText={step.title}
          />
        ))
      ) : (
        <Step
          number={0}
          title={journey.title}
          description={journey.more_details}
          imageSrc={journey.image}
          altText={journey.title}
        />
      )}
    </section>
  );
};

export default StepsInformation;
