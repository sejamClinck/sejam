// import { Link } from "react-router-dom";
import ArrowLink from "./ArrowLink";
const DoctorInformationCard = ({ doctor }) => {
  return (
    <article
      className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0"
      aria-label={`Doctor Information: ${doctor.name}, ${doctor.specialization}`}
    >
      <div
        className="bg-cover h-[600px] rounded-2xl flex items-end overflow-hidden"
        style={{ backgroundImage: `url(${doctor.image})` }}
        role="img"
        aria-label={`${doctor.name} - ${doctor.specialization}`}
      >
        <div className="w-full h-[300px] flex justify-between items-end bg-gradient-to-b p-5 from-red-600/0 to-[#eb6a48]">
          <div className="w-[190px] flex-col justify-start items-end gap-[15px] inline-flex">
            <h3 className="self-stretch text-right text-white text-[1.6rem] font-bold">
              {doctor.name}
            </h3>
            <p className="text-right text-[#f0f0f0] text-base font-bold">
              {doctor.specialization}
            </p>
          </div>

          <ArrowLink doctor={doctor} />
        </div>
      </div>
    </article>
  );
};

export default DoctorInformationCard;
