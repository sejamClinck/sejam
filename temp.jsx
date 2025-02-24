// import { Link } from "react-router-dom";
// import d1 from "../../assets/img/doctors/d1.png";
// import d2 from "../../assets/img/doctors/d2.png";
// import d3 from "../../assets/img/doctors/d3.png";
// import d4 from "../../assets/img/doctors/d4.png";
// import d5 from "../../assets/img/doctors/d5.png";
// import d6 from "../../assets/img/doctors/d6.png";
// import { useTranslation } from "react-i18next";

// const DoctorsInformation = () => {
//   const { t } = useTranslation("doctors");
//   const doctors = [
//     {
//       id: 1,
//       name: t("name1"),
//       specialization: t("specialization1"),
//       image: d1,
//       link: "/our-doctors/1", // Updated to match React Router's Link
//     },
//     {
//       id: 2,
//       name: t("name2"),
//       specialization: t("specialization2"),
//       image: d2,
//       link: "/our-doctors/2", // Updated to match React Router's Link
//     },
//     {
//       id: 3,
//       name: t("name3"),
//       specialization: t("specialization3"),
//       image: d3,
//       link: "/our-doctors/3", // Updated to match React Router's Link
//     },
//     {
//       id: 4,
//       name: t("name4"),
//       specialization: t("specialization4"),
//       image: d4,
//       link: "/our-doctors/4", // Updated to match React Router's Link
//     },
//     {
//       id: 5,
//       name: t("name5"),
//       specialization: t("specialization5"),
//       image: d5,
//       link: "/our-doctors/5", // Updated to match React Router's Link
//     },
//     {
//       id: 6,
//       name: t("name6"),
//       specialization: t("specialization6"),
//       image: d6,
//       link: "/our-doctors/6", // Updated to match React Router's Link
//     },
//   ];

//   return (
//     <>
//       <section
//         className="bg-gradient-to-b from-white to-gray-50 py-10 md:py-20"
//         aria-labelledby="headline"
//       >
//         <div className="relative max-w-8xl mx-0 md:mx-10 mx-auto px-5 md:px-10 rounded-t-2xl bg-white p-3">
//           <header className=" flex flex-col">
//             <h1
//               id="headline"
//               className="text-[#323f47] text-[30px] md:text-[76.43px] font-bold font-['Segoe UI']"
//             >
//               {t("experince-in")}
//             </h1>
//             <h2 className="text-[#e8604b] text-[30px] md:text-[76.43px] font-bold font-['Segoe UI']">
//               {t("your-smile")}
//             </h2>
//           </header>
//         </div>
//       </section>

//       <section>
//         <div className="max-w-8xl mx-0 md:mx-10 mx-auto px-5 md:px-10">
//           <div className="grid grid-cols-1 sm:grid md:grid-cols-3 gap-6">
//             {doctors.map((doctor) => (
//               <div
//                 key={doctor.id}
//                 className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0"
//               >
//                 <div
//                   className="bg-cover h-[600px] rounded-2xl flex items-end overflow-hidden"
//                   style={{ backgroundImage: `url(${doctor.image})` }}
//                 >
//                   <div className="w-full h-[300px] flex justify-between items-end bg-gradient-to-b p-5 from-red-600/0 to-[#eb6a48]">
//                     <div className="w-[190px] flex-col justify-start items-end gap-[15px] inline-flex">
//                       <div className="self-stretch  text-white text-[25.40px] font-bold">
//                         {doctor.name}
//                       </div>
//                       <div className=" text-[#f0f0f0] text-base font-bold">
//                         {doctor.specialization}
//                       </div>
//                     </div>
//                     <div className="w-[45px] h-[45px] px-[5px] py-1 bg-white rounded-[22.50px] justify-center items-center flex">
//                       <Link
//                         to={doctor.link}
//                         className="w-6 h-6 px-0.5 py-[2.34px] justify-center items-center flex"
//                       >
//                         <svg
//                           className="text-red-500"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         >
//                           <line x1="17" y1="17" x2="7" y2="7" />
//                           <polyline points="7 17 7 7 17 7" />
//                         </svg>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default DoctorsInformation;





// ================= //////////////////////////////////////// ==========================/////////////////////////







// import banner from "../assets/img/showDoctor/Banner.png";
// import { SharedHero } from "../components";
// import ContactDoctorForm from "../components/doctorInformation/ContactDoctorForm";
// import ReserveButton from "../components/doctorInformation/RserveButton";
// import DoctorFormHeader from "../components/doctorInformation/DoctorFormHeader";
// import DoctorBanner from "../components/doctorInformation/DoctorBanner";

// import { useTranslation } from "react-i18next";
// const DoctorInformation = () => {
//   const { t } = useTranslation("doctorInformation");
//   // Dynamic data structure for the doctor's information
//   const doctorInformation = {
//     name: t("doctor_name"), // Use t() to translate
//     title: t("doctor_title"),
//     description: t("doctor_description"),
//     experience: 15,
//     education: t("education"),
//     specialties: [
//       {
//         title: t("specialties.0.specialty_title"),
//         description: t("specialties.0.specialty_description"),
//       },
//       {
//         title: t("specialties.1.specialty_title"),
//         description: t("specialties.1.specialty_description"),
//       },
//       {
//         title: t("specialties.2.specialty_title"),
//         description: t("specialties.2.specialty_description"),
//       },
//       {
//         title: t("specialties.3.specialty_title"),
//         description: t("specialties.3.specialty_description"),
//       },
//     ],
//     philosophy: t("philosophy"),
//     certifications: t("certifications"),
//     clinicInfo: {
//       location: t("clinic_info.location"),
//       contact: t("clinic_info.contact"),
//       website: t("clinic_info.website"),
//     },
//   };

//   return (
//     <main className="mb-32">
//       <SharedHero />
//       <section>
//         <DoctorBanner banner={banner} />
//         <div className="max-w-8xl md:mx-10 mx-auto px-5 md:px-10 mt-10">
//           <div className="flex md:flex-row flex-col">
//             <div className="basis-3/4">
//               <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
//                 <div className="self-stretch flex-col justify-start items-start gap-[30px] flex">
//                   <div className="self-stretch  text-[#292929] text-[32px] font-bold">
//                     {doctorInformation.name} - {doctorInformation.title}
//                   </div>
//                   <div className="self-stretch  text-[#464646] text-xl font-normal leading-loose">
//                     {doctorInformation.description}
//                   </div>
//                 </div>

//                 {/* Specialties Section */}
//                 <div className="self-stretch flex-col justify-start items-start gap-8 flex">
//                   <div className="self-stretch  text-[#292929] text-xl font-semibold">
//                     {t("spicials")}
//                   </div>
//                   {doctorInformation.specialties.map((specialty, index) => (
//                     <div
//                       key={index}
//                       className="self-stretch flex-col justify-start items-start gap-6 flex"
//                     >
//                       <div className="self-stretch  text-[#e8604b] text-base font-semibold">
//                         {specialty.title}:
//                       </div>
//                       <div className="self-stretch pr-[25px] justify-center items-center gap-2.5 inline-flex">
//                         <div className="grow shrink basis-0  text-[#464646] text-[15px] font-normal">
//                           {specialty.description}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Philosophy Section */}
//                 <div className="self-stretch flex-col justify-start items-start gap-6 flex">
//                   <div className="self-stretch  text-[#292929] text-xl font-semibold">
//                    { t("car-phisyology")}
//                   </div>
//                   <div className="self-stretch  text-[#464646] text-base font-normal leading-relaxed">
//                     {doctorInformation.philosophy}
//                   </div>
//                 </div>

//                 {/* Certifications Section */}
//                 <div className="self-stretch flex-col justify-start items-start gap-6 flex">
//                   <div className="self-stretch  text-[#292929] text-xl font-semibold">
//                     {t("cirtificate")}
//                   </div>
//                   <div className="self-stretch  text-[#464646] text-base font-normal leading-relaxed">
//                     {doctorInformation.certifications}
//                   </div>
//                 </div>

//                 {/* Clinic Information Section */}
//                 <div className="self-stretch flex-col justify-start items-start gap-6 flex">
//                   <div className="self-stretch  text-[#292929] text-xl font-semibold">
//                     {t("appointment")}
//                   </div>
//                   <div className="self-stretch  text-[#464646] text-base font-normal leading-relaxed">
//                     {doctorInformation.clinicInfo.location}. للحجز أو الاستفسار،
//                     يمكنك التواصل عبر {doctorInformation.clinicInfo.contact} أو
//                     زيارة الموقع الإلكتروني{" "}
//                     <a
//                       href={doctorInformation.clinicInfo.website}
//                       className="text-blue-600"
//                     >
//                       {doctorInformation.clinicInfo.website}
//                     </a>
//                     .
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <ReserveButton />
//           </div>
//         </div>
//         <DoctorFormHeader />
//         <ContactDoctorForm />
//       </section>
//     </main>
//   );
// };

// export default DoctorInformation;







import axios from "axios";
import { useEffect, useState } from "react";
import KeywordTag from "./KewordTag";
import BlogPost from "./BlogPost";
import RecommendedArticle from "./RecommendedArticle";
// import PaginationContainer from "./PaginationContainer";
import { useTranslation } from "react-i18next";
import b1 from "../../assets/img/blog/b1.png";
import loader from "../../assets/img/loader/loader.gif";

const BlogSection = () => {
  const { t, i18n } = useTranslation("sgamBedia");

  // State to store blog posts from API
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // State to store keywords
  const keywords = [
    t("key1"),
    t("key2"),
    t("key3"),
    t("key4"),
    t("key5"),
    t("key6"),
    t("key7"),
    t("key8"),
    t("key9"),
    t("key10"),
  ];

  const recommendedArticles = [
    {
      title: t("title1"),
      content: t("content1"),
    },
    {
      title: t("title2"),
      content: t("content2"),
    },
    {
      title: t("title3"),
      content: t("content3"),
    },
  ];

  const [activeKeyword, setActiveKeyword] = useState(null);

  useEffect(() => {
    // Get the active language from i18n
    const language = i18n.language;

    // Fetch blog posts when the component mounts or the language changes
    axios
      .get(`http://127.0.0.1:8000/api/blogs?lang=${language}`)
      .then((response) => {
        if (response.data.success) {
          const fetchedPosts = response.data.data.map((post) => ({
            id: post.id,
            imageUrl: post.imageUrl || b1, // Fallback to default image if no URL
            title: post.title,
            content: post.content,
            tag: post.tag,
          }));
          setBlogPosts(fetchedPosts);
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setLoading(false));
  }, [i18n.language]); // Trigger this effect when the language changes

  const handleKeywordClick = (keyword) => {
    setActiveKeyword(keyword === activeKeyword ? null : keyword);
  };

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center">
        <img className="w-[70px]" src={loader} alt="loading..." />
      </div>
    ); // Handle loading state
  }

  if (error) {
    return (
      <div className="w-full flex items-center justify-center bg-red-300 max-w-[200px] m-auto p-3 rounded-xl">
        {error}
      </div>
    ); // Handle error state
  }

  return (
    <section>
      <div className="max-w-8xl mx-auto px-5 md:px-10 my-[20px] flex flex-col items-center justify-center">
        <div className="flex gap-5 w-full justify-start md:flex-row flex-col">
          <div className="basis-2/3">
            <div className="bg-[#f6f6f6] rounded-2xl p-3">
              <div className="grid-cols-1 sm:grid md:grid-cols-3 gap-5">
                {blogPosts.map((post) => (
                  <BlogPost key={post.id} {...post} />
                ))}
              </div>
            </div>
            {/* <PaginationContainer /> */}
            <div className="flex items-center justify-center mt-5">
              <div className="h-10  justify-start items-start gap-5 inline-flex">
                <div className="px-4 py-2.5 bg-[#eb6a48] rounded-tr-lg rounded-br-lg border border-[#fef4f2] justify-center items-center gap-2 flex">
                  <button className="text-white text-[15px] bg-white/0 font-normal font-['Almarai'] leading-tight flex gap-3">
                    <svg
                      className="h-4 w-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />{" "}
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    {t("next")}
                  </button>
                </div>
                <div className="px-4 py-2.5 bg-white rounded-tl-lg rounded-bl-lg border border-[#f0f8ff] justify-center items-center gap-2 flex">
                  <button className="text-[#1d2838] bg-white/0 text-[15px] font-normal font-['Almarai'] leading-tight flex gap-2">
                    {t("prev")}
                    <svg
                      className="h-5 w-5 text-red-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="5" y1="12" x2="19" y2="12" />{" "}
                      <line x1="5" y1="12" x2="11" y2="18" />{" "}
                      <line x1="5" y1="12" x2="11" y2="6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/4 bg-[#f0f0f0] p-3 rounded-2xl">
            <div className="bg-white rounded-[15px] flex-col justify-start items-start gap-5 inline-flex">
              <div className="self-stretch p-5 flex-col justify-start items-start gap-4 flex">
                <div className="justify-end items-center gap-1 inline-flex">
                  <div className="w-[7px] h-[7px] bg-[#eb6a48] rounded-full"></div>
                  <div className=" text-black text-base font-semibold font-['Segoe UI']">
                    {t("words-main")}
                  </div>
                </div>
                <div className="self-stretch justify-end items-start gap-2.5 inline-flex flex-wrap">
                  {keywords.map((keyword, index) => (
                    <KeywordTag
                      key={index}
                      keyword={keyword}
                      isActive={keyword === activeKeyword}
                      onClick={() => handleKeywordClick(keyword)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full bg-white rounded-[15px] flex-col justify-start items-start gap-5 inline-flex mt-5">
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="h-[349px] p-5 flex-col justify-start items-start gap-4 inline-flex">
                  <div className="justify-end items-center gap-1 inline-flex">
                    <div className="w-[7px] h-[7px] bg-[#eb6a48] rounded-full"></div>
                    <div className=" text-black text-base font-semibold font-['Segoe UI']">
                      {t("artical")}
                    </div>
                  </div>
                  {recommendedArticles.map((article, index) => (
                    <RecommendedArticle key={index} {...article} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

