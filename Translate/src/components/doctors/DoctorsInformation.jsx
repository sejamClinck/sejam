import { Link } from "react-router-dom";
import d1 from "../../assets/img/doctors/d1.png";
import d2 from "../../assets/img/doctors/d2.png";
import d3 from "../../assets/img/doctors/d3.png";
import d4 from "../../assets/img/doctors/d4.png";
import d5 from "../../assets/img/doctors/d5.png";
import d6 from "../../assets/img/doctors/d6.png";
import { useTranslation } from "react-i18next";

const DoctorsInformation = () => {
  const { t } = useTranslation("doctors");
  const doctors = [
    {
      id: 1,
      name: t("name1"),
      specialization: t("specialization1"),
      image: d1,
      link: "/our-doctors/1", // Updated to match React Router's Link
    },
    {
      id: 2,
      name: t("name2"),
      specialization: t("specialization2"),
      image: d2,
      link: "/our-doctors/2", // Updated to match React Router's Link
    },
    {
      id: 3,
      name: t("name3"),
      specialization: t("specialization3"),
      image: d3,
      link: "/our-doctors/3", // Updated to match React Router's Link
    },
    {
      id: 4,
      name: t("name4"),
      specialization: t("specialization4"),
      image: d4,
      link: "/our-doctors/4", // Updated to match React Router's Link
    },
    {
      id: 5,
      name: t("name5"),
      specialization: t("specialization5"),
      image: d5,
      link: "/our-doctors/5", // Updated to match React Router's Link
    },
    {
      id: 6,
      name: t("name6"),
      specialization: t("specialization6"),
      image: d6,
      link: "/our-doctors/6", // Updated to match React Router's Link
    },
  ];

  return (
    <>
      <section
        className="bg-gradient-to-b from-white to-gray-50 py-10 md:py-20"
        aria-labelledby="headline"
      >
        <div className="relative max-w-8xl mx-0 md:mx-10 mx-auto px-5 md:px-10 rounded-t-2xl bg-white p-3">
          <header className=" flex flex-col">
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
        <div className="max-w-8xl mx-0 md:mx-10 mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 sm:grid md:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0"
              >
                <div
                  className="bg-cover h-[600px] rounded-2xl flex items-end overflow-hidden"
                  style={{ backgroundImage: `url(${doctor.image})` }}
                >
                  <div className="w-full h-[300px] flex justify-between items-end bg-gradient-to-b p-5 from-red-600/0 to-[#eb6a48]">
                    <div className="w-[190px] flex-col justify-start items-end gap-[15px] inline-flex">
                      <div className="self-stretch  text-white text-[25.40px] font-bold">
                        {doctor.name}
                      </div>
                      <div className=" text-[#f0f0f0] text-base font-bold">
                        {doctor.specialization}
                      </div>
                    </div>
                    <div className="w-[45px] h-[45px] px-[5px] py-1 bg-white rounded-[22.50px] justify-center items-center flex">
                      <Link
                        to={doctor.link}
                        className="w-6 h-6 px-0.5 py-[2.34px] justify-center items-center flex"
                      >
                        <svg
                          className="text-red-500"
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
      </section>
    </>
  );
};

export default DoctorsInformation;
