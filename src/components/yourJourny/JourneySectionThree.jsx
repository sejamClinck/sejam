import { useEffect, useState } from "react";
import Step from "./Step";
import { useTranslation } from "react-i18next";
import axios from "axios";
import loader from "../../assets/img/loader/loader.gif";

// JourneySectionThree Component
const JourneySectionThree = () => {
  const { i18n } = useTranslation("yourJourney");
  const [journeys, setJourneys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get the current language from i18next
    const currentLang = i18n.language || "en"; // Default to 'en' if no language is set

    // Fetch journeys from the API
    const fetchJourneys = async () => {
      try {
        const response = await axios.get(
          `https://sijamdashboard.com/api/journeys?lang=${currentLang}`
        );
        setJourneys(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJourneys();
  }, [i18n.language]); // Only rerun if language changes

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <img className="w-[50px]" src={loader} alt="loading..." />
      </div>
    );
  if (error) return <div className="flex items-center justify-center text-red-500">{error}</div>;

  return (
    <section aria-labelledby="journey-section-heading">
      <h2 id="journey-section-heading" className="sr-only">
        Our Treatment Journey
      </h2>

      <div className="max-w-6xl mx-auto px-5 md:px-10 mt-10">
        {/* Map through the journeys array and render Step component for each step */}
        {journeys.map((step, index) => (
          <div key={index} className="mt-10">
            <Step
              service_id={step.journey_id}
              image={step.image}
              smallText={step.smallText}
              title={step.title}
              description={step.description}
              isImageFirst={index % 2 === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneySectionThree;
