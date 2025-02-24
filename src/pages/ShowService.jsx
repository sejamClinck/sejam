import { useEffect, useState } from "react";
import axios from "axios";
import bannel from "../assets/img/showPost/banner.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import loader from "../assets/img/loader/loader.gif";

function ShowService() {
  const { t, i18n } = useTranslation("services");
  const [service, setService] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 6; // Number of doctors to show per page
  const { service_id } = useParams();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await axios.get(
          `https://sijamdashboard.com/api/services/${service_id}`,
          {
            params: { lang: i18n.language },
          }
        );
        setService(response.data.data);
        setDoctors(response.data.data.doctors);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServiceData();
  }, [service_id, i18n.language]);

  if (!service) {
    return (
      <div>
        <img src={loader} alt="loader" className="mx-auto mt-20" />
      </div>
    );
  }

  // Pagination logic
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="overflow-hidden px-5">
      {/* Image and header section */}
      <div
        className="bg-cover rounded-2xl h-[500px] mt-[100px]"
        style={{ backgroundImage: `url(${bannel})` }}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-t from-[black] to-[black]/0 flex items-center justify-center">
          <img
            className="z-0 h-[300px] m-auto rounded-2xl object-cover object-center"
            src={service.imageSrc || bannel}
            alt={service.title}
          />
        </div>
      </div>
      <h1 className="z-10 text-white text-[20px] md:text-[48.89px] font-bold leading-tight font-sans p-5 mt-[-120px]">
        {service.title}
      </h1>

      {/* Description section */}
      <div className="max-w-5xl mx-auto mt-[100px]">
        <div className="self-stretch text-[#656565] text-base font-normal font-['Segoe UI'] leading-normal mt-5">
          <h1 className="self-stretch text-[#292929] text-xl font-bold font-['Segoe UI']">
            {service.title}
          </h1>
          <p>{service.description}</p>
          <h2 className="self-stretch mt-5 text-[#292929] text-xl font-bold font-['Segoe UI']">
            {t("include")} {service.title}
          </h2>

          {service.details.map((detail, index) => (
            <div key={index} className="mt-10">
              <h2 className="self-stretch text-[#292929] text-xl font-bold font-['Segoe UI']">
                {index + 1}. {detail.title}
              </h2>
              <div className="text-[#656565] text-base font-normal font-['Segoe UI'] my-4">
                {detail.more_details}
              </div>
              <img
                className="w-full h-[300px] rounded-2xl object-cover object-center"
                src={detail.image || bannel}
                alt={detail.title}
              />
            </div>
          ))}
          <h2 className="self-stretch mt-10 text-[#292929] text-xl font-bold font-['Segoe UI']">
            {t("doctorsServices")}
          </h2>

          {/* Doctors section */}
          <section>
            <div className="my-5">
              <div className="grid grid-cols-1 sm:grid md:grid-cols-2 gap-6">
                {currentDoctors.map((doctor) => (
                  <div
                    key={doctor.doctor_id}
                    className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0"
                  >
                    <div
                      className="bg-cover h-[600px] rounded-2xl flex items-end overflow-hidden"
                      style={{ backgroundImage: `url(${doctor.doctor_image})` }}
                    >
                      <div className="w-full h-[300px] flex justify-between items-end bg-gradient-to-b p-5 from-red-600/0 to-[#eb6a48]">
                        <div className="flex-col justify-start items-start gap-[15px] inline-flex">
                          <div className="self-stretch text-white text-[25.40px] font-bold">
                            {doctor.doctor_name}
                          </div>
                          <div className="text-[#f0f0f0] text-base font-bold">
                            {doctor.doctor_specialization}
                          </div>
                        </div>
                        <div className="w-[45px] h-[45px] px-[5px] py-1 bg-white hover:bg-red-500 transition-transform duration-300 ease-in-out rounded-[22.50px] justify-center items-center flex">
                          <Link
                            to={`/our-doctors/${doctor.doctor_id}`}
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
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center my-5">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-3 py-1 ${
                    currentPage === index + 1
                      ? "bg-red-500 text-white"
                      : "bg-gray-300 text-black"
                  } rounded`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ShowService;
