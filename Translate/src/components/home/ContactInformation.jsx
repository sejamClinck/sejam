// const ContactInformation = () => {
//   return (
//     <section
//       className="flex justify-center items-center my-3"
//       aria-labelledby="contact-info-title"
//     >
//       <div className="w-[391px] flex-col justify-start items-start gap-8 inline-flex">
//         <h2
//           id="contact-info-title"
//           className="self-stretch text-right text-[#7c7c7c] text-[32px] font-semibold font-['Segoe UI'] leading-[51.20px]"
//         >
//           معلومات الاتصال
//         </h2>
//         <div className="self-stretch  flex-col justify-start items-start gap-8 flex">
//           <div className="self-stretch justify-end items-start gap-3 inline-flex">
//             <div className="w-[30px] h-[30px] p-2 bg-white rounded-[5px] flex justify-center items-center gap-2.5">
//               <svg
//                 className="h-8 w-8 text-red-500"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 aria-hidden="true"
//                 role="img"
//                 aria-label="Phone icon"
//               >
//                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//               </svg>
//             </div>
//             <div className="w-[349px] flex-col justify-start items-start gap-6">
//               <p className="text-right text-[#656565] text-base font-normal font-['Segoe UI'] leading-relaxed">
//                 رقم الهاتف
//               </p>
//               <p className="text-right text-[#292929] text-xl font-semibold font-['Segoe UI'] leading-loose">
//                 <a
//                   href="tel:+966508577070"
//                   aria-label="Call us at +966 50 857 7070"
//                 >
//                   +966 50 857 7070
//                 </a>
//               </p>
//             </div>
//           </div>
//           <div className="self-stretch justify-end items-start gap-3 inline-flex">
//             <div className="w-[30px] h-[30px] p-2 bg-white rounded-[5px] flex justify-center items-center gap-2.5">
//               <svg
//                 className="h-8 w-8 text-red-500"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 aria-hidden="true"
//                 role="img"
//                 aria-label="Email icon"
//               >
//                 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//                 <polyline points="22,6 12,13 2,6" />
//               </svg>
//             </div>
//             <div className="w-[349px] flex-col justify-start items-start gap-6">
//               <p className="text-right text-[#656565] text-base font-normal font-['Segoe UI'] leading-relaxed">
//                 البريد الإلكتروني:
//               </p>
//               <p className="text-right text-[#292929] text-xl font-semibold font-['Segoe UI'] leading-loose">
//                 <a
//                   href="mailto:info@yourclinic.com"
//                   aria-label="Email us at info@yourclinic.com"
//                 >
//                   info@yourclinic.com
//                 </a>
//               </p>
//             </div>
//           </div>
//           <div className="self-stretch justify-end items-start gap-3 inline-flex">
//             <div className="w-[30px] h-[30px] p-2 bg-white rounded-[5px] flex justify-center items-center gap-2.5">
//               <svg
//                 className="h-8 w-8 text-red-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//                 role="img"
//                 aria-label="Location icon"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//             </div>
//             <div className="w-[349px] flex-col justify-start items-start gap-6">
//               <p className="text-right text-[#656565] text-base font-normal font-['Segoe UI'] leading-relaxed">
//                 العنوان:
//               </p>
//               <p className="text-right text-[#292929] text-xl font-semibold font-['Segoe UI'] leading-loose">
//                 شارع الملك فيصل، الرياض، المملكة العربية السعودية
//               </p>
//             </div>
//           </div>
//           <div className="self-stretch justify-end items-start gap-3 inline-flex">
//             <div className="w-[30px] h-[30px] p-2 bg-white rounded-[5px] flex justify-center items-center gap-2.5">
//               <svg
//                 className="h-8 w-8 text-red-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//                 role="img"
//                 aria-label="Hours icon"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//             </div>
//             <div className="w-[349px] flex-col justify-start items-start gap-6">
//               <p className="text-right text-[#656565] text-base font-normal font-['Segoe UI'] leading-relaxed">
//                 ساعات العمل:
//               </p>
//               <p className="text-right text-[#292929] text-xl font-semibold font-['Segoe UI'] leading-loose">
//                 الأحد - الخميس: 9:00 صباحًا - 9:00 مساءً
//               </p>
//               <p className="text-right text-[#292929] text-xl font-semibold font-['Segoe UI'] leading-loose">
//                 الجمعة: مغلق
//               </p>
//               <p className="text-right text-[#292929] text-xl font-semibold font-['Segoe UI'] leading-loose">
//                 السبت: 10:00 صباحًا - 6:00 مساءً
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactInformation;
import { phoneNumber } from "../../utils/websiteInformation";
import { useTranslation } from "react-i18next";

const ContactItem = ({ icon, label, content, link }) => (
  
  <div className="self-stretch justify-end items-start gap-3 inline-flex">
    <div className="p-2 bg-white rounded-[5px] flex justify-center items-center gap-2.5">
      {icon}
    </div>
    <div className="w-[349px] flex-col justify-start items-start gap-6">
      <p className="text-right text-[#656565] text-base font-normal leading-relaxed">
        {label}
      </p>
      <p className="text-right text-[#292929] text-xl font-semibold leading-loose">
        {link ? (
          <a href={link} aria-label={label}>
            {content}
          </a>
        ) : (
          content
        )}
      </p>
    </div>
  </div>
);

const PhoneIcon = () => (
  <svg
    className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-red-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    role="img"
    aria-label="Phone icon"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-red-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    role="img"
    aria-label="Email icon"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    role="img"
    aria-label="Location icon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const HoursIcon = () => (
  <svg
    className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    role="img"
    aria-label="Hours icon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ContactInformation = () => {
  const { t } = useTranslation("home"); // Use 'home' namespace

  return (
    <section
      className="flex justify-center items-center my-3  "
      aria-labelledby="contact-info-title"
    >
      <div className="w-[391px] flex-col justify-start items-start gap-8 inline-flex max-sm:pr-5">
        <h2
          id="contact-info-title"
          className="self-stretch text-right text-[#7c7c7c] text-[32px] font-semibold leading-[51.20px]"
        >
          {t("s11-contact-info")}
        </h2>
        <div className="self-stretch flex-col justify-start items-start gap-8 flex">
          <ContactItem
            icon={<PhoneIcon />}
            label={t("s11-phone-number")}
            content={phoneNumber}
            link="tel:+966508577070"
          />
          <ContactItem
            icon={<EmailIcon />}
            label={t("s11-email")}
            content="info@yourclinic.com"
            link="mailto:info@yourclinic.com"
          />
          <ContactItem
            icon={<LocationIcon />}
            label={t("s11-address")}
            content={t("s11-subaddress")}
          />
          <ContactItem
            icon={<HoursIcon />}
            label={t("s11-work-hour")}
            content={t("s11-work-times")}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
