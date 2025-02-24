import { useEffect, useState } from "react";
// import banner from "../assets/img/showDoctor/Banner.png";
import { SharedHero } from "../components";
import ContactDoctorForm from "../components/doctorInformation/ContactDoctorForm";
import ReserveButton from "../components/doctorInformation/RserveButton";
import DoctorFormHeader from "../components/doctorInformation/DoctorFormHeader";
import DoctorBanner from "../components/doctorInformation/DoctorBanner";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useParams } from "react-router-dom"; // to get doctor_id from the URL
import loader from "../assets/img/loader/loader.gif";

const DoctorInformation = () => {
  const { t, i18n } = useTranslation("doctorInformation");
  const { doctorId } = useParams(); // extract doctor ID from the URL
  const [doctorData, setDoctorData] = useState(null); // state to store fetched doctor data

  // Fetch the doctor data when the component mounts
  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(
          `https://sijamdashboard.com/api/doctors/${doctorId}`,
          {
            params: { lang: i18n.language }, // pass the current language
          }
        );
        setDoctorData(response.data.data); // set the doctor data from API response
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctorData();
  }, [doctorId, i18n.language]); // refetch when the ID or language changes

  if (!doctorData) {
    return (
      <div>
        <div className="w-full flex items-center justify-center">
          <img className="w-[70px]" src={loader} alt="loading..." />
        </div>
      </div>
    );
  }

  return (
    <main className="mb-32">
      <SharedHero />
      <section>
        <DoctorBanner banner={doctorData.bannel_image} />
        <div className="max-w-8xl md:mx-10 mx-auto px-5 md:px-10 mt-10">
          <div className="flex md:flex-row flex-col">
            <div className="basis-3/4">
              <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-[30px] flex">
                  <div className="self-stretch  text-[#292929] text-[32px] font-bold">
                    {doctorData.name} - {doctorData.specialization}
                  </div>
                  <div className="self-stretch  text-[#464646] text-xl font-normal leading-loose">
                    {doctorData.description}
                  </div>
                </div>

                {/* Specialties Section */}
                <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                  <div className="self-stretch  text-[#292929] text-xl font-semibold">
                    {t("spicials")}
                  </div>
                  {doctorData.services.map((service, index) =>
                    service.title && service.description ? (
                      <div
                        key={index}
                        className="self-stretch flex-col justify-start items-start gap-6 flex"
                      >
                        <div className="self-stretch  text-[#e8604b] text-base font-semibold">
                          {service.title}:
                        </div>
                        <div className="self-stretch pr-[25px] justify-center items-center gap-2.5 inline-flex">
                          <div className="grow shrink basis-0  text-[#464646] text-[15px] font-normal">
                            {service.description}
                          </div>
                        </div>
                      </div>
                    ) : null
                  )}
                </div>

                {/* Philosophy Section */}
                <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch  text-[#292929] text-xl font-semibold">
                    {t("car-phisyology")}
                  </div>
                  <div className="self-stretch  text-[#464646] text-base font-normal leading-relaxed">
                    {doctorData.mindset}
                  </div>
                </div>

                {/* Certifications Section */}
                <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch  text-[#292929] text-xl font-semibold">
                    {t("cirtificate")}
                  </div>
                  <div className="self-stretch  text-[#464646] text-base font-normal leading-relaxed">
                    {doctorData.certification}
                  </div>
                </div>

                {/* Clinic Information Section */}
                <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch  text-[#292929] text-xl font-semibold">
                    {t("appointment")}
                  </div>
                  <div className="self-stretch  text-[#464646] text-base font-normal leading-relaxed">
                    {doctorData.location}. للحجز أو الاستفسار، يمكنك التواصل عبر{" "}
                    {doctorData.appointment}.
                  </div>
                </div>
              </div>
            </div>

            <ReserveButton />
          </div>
        </div>
        <DoctorFormHeader />
        <ContactDoctorForm />
      </section>
    </main>
  );
};

export default DoctorInformation;
