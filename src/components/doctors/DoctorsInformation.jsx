import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import loader from "../../assets/img/loader/loader.gif";
import { Link } from "react-router-dom";

const DoctorsInformation = () => {
  const { t, i18n } = useTranslation("doctors");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const doctorsPerPage = 6; // Number of doctors per page

  const fetchDoctors = async (language) => {
    try {
      const response = await axios.get(
        `https://sijamdashboard.com/api/doctors?lang=${language}`
      );
      setDoctors(response.data.data); // Set the doctors' data
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors(i18n.language);
  }, [i18n.language]);

  // Get current doctors to display based on pagination
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  // Handle next and previous button clicks
  const handleNextPage = () => {
    if (currentPage < Math.ceil(doctors.length / doctorsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center">
        <img className="w-[70px]" src={loader} alt="loading..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex items-center justify-center">{error}</div>
    );
  }

  return (
    <>
      <section
        className="bg-gradient-to-b from-white to-gray-50 py-10 md:py-20"
        aria-labelledby="headline"
      >
        <div className="relative max-w-8xl md:mx-10 mx-auto px-5 md:px-10 rounded-t-2xl bg-white p-3">
          <header className="flex flex-col">
            <h1
              id="headline"
              className="text-[#323f47] text-[30px] md:text-[76.43px] font-bold font-['Segoe UI']"
            >
              {t("experince-in")}
            </h1>
            <h2 className="text-[#e8604b] text-[30px] md:text-[76.43px] font-bold font-['Segoe UI']">
              {t("your-smile")}
            </h2>
          </header>
        </div>
      </section>

      <section>
        <div className="max-w-8xl md:mx-10 mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 sm:grid md:grid-cols-3 gap-6">
            {currentDoctors.map((doctor) => (
              <div
                key={doctor.doctor_id}
                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0"
              >
                <div
                  className="bg-cover h-[600px] rounded-2xl flex items-end overflow-hidden"
                  style={{ backgroundImage: `url(${doctor.image})` }}
                >
                  <div className="w-full h-[300px] flex justify-between items-end bg-gradient-to-b p-5 from-red-600/0 to-[#eb6a48]">
                    <div className="flex-col justify-start items-start gap-[15px] inline-flex">
                      <div className="self-stretch text-white text-[25.40px] font-bold">
                        {doctor.name}
                      </div>
                      <div className="text-[#f0f0f0] text-base font-bold">
                        {doctor.specialization}
                      </div>
                    </div>
                    <div className="w-[45px] h-[45px] px-[5px] py-1 bg-white hover:bg-red-500 transition-transform duration-300 ease-in-out rounded-[22.50px] justify-center items-center flex">
                      <Link
                        to={"/our-doctors/" + doctor.doctor_id}
                        className="w-6 h-6 px-0.5 py-[2.34px] justify-center items-center flex"
                      >
                        <svg
                          className="text-red-500 hover:rotate-90 hover:text-white transition-transform duration-300 ease-in-out"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="17" y1="17" x2="7" y2="7" />
                          <polyline points="7 17 7 7 17 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="max-w-[200px] mx-auto flex justify-between mt-10">
            <button
              className={`px-4 py-2 text-white bg-red-500 rounded-md ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              {t("Previous")}
            </button>

            <button
              className={`px-4 py-2 text-white bg-red-500 rounded-md ${
                currentPage === Math.ceil(doctors.length / doctorsPerPage)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(doctors.length / doctorsPerPage)}
            >
              {t("Next")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorsInformation;
