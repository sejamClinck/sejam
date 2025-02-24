import { Link } from "react-router-dom";

const StepDescription = ({ smallText, title, description }) => {
  return (
    <header className="w-full md:basis-1/2 flex items-center justify-center">
      <div className="text-center md:text-left w-full max-w-md">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="px-4 py-2 bg-[#fef4f2] rounded-full inline-flex items-center justify-center">
            <p className="text-[#eb6a48] text-xs font-semibold font-['Segoe UI'] leading-snug text-start">
              {smallText}
            </p>
          </div>
          <h3 className="text-[#292929] text-4xl md:text-5xl font-semibold font-['Segoe UI'] text-start">
            {title}
          </h3>
        </div>
        <p className="mt-2 text-[#3d3d3d] text-base font-semibold font-['Segoe UI'] leading-7 text-start">
          {description}
        </p>
        <div className="mt-4 text-center md:text-right">
          <Link
            to={`/your-journey/1`}
            className="inline-block px-6 py-2 bg-[#507A8A] text-white rounded-full font-semibold hover:bg-[#d55a3a] transition-colors duration-300 small"
          >
            معرفه المذيد
          </Link>
        </div>
      </div>
    </header>
  );
};

export default StepDescription;
