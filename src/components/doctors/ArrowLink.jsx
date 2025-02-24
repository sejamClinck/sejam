import { Link } from "react-router-dom";

const ArrowLink = ({ doctor }) => {
  return (
    <div className="w-[45px] h-[45px] px-[5px] py-1 bg-white rounded-[22.50px] justify-center items-center flex hover:bg-[#eb6a48]">
      <Link
        to={doctor.link}
        className="w-6 h-6 px-0.5 py-[2.34px] justify-center items-center flex hover:bg-gray-200 rounded-[50%] group"
        aria-label={`Learn more about Dr. ${doctor.name}`}
      >
        <svg
          className="text-red-500 transform group-hover:rotate-90 hover:text-red-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          focusable="true"
          aria-hidden="false"
          role="img"
        >
          <line x1="17" y1="17" x2="7" y2="7" />
          <polyline points="7 17 7 7 17 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ArrowLink;
