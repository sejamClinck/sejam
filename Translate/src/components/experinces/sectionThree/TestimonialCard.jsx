const TestimonialCard = ({ name, image, testimonial, isActive }) => (
  <div
    className={`w-[350px] md:w-[700px] h-[180px] flex-col justify-start items-center gap-2.5 inline-flex transition-all duration-500 m-5 ${
      isActive ? "scale-105 z-10" : "scale-95 opacity-70"
    }`}
  >
    <div className="w-full h-[200px] px-4 py-5 bg-white rounded-2xl border border-[#fab5a3] hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 ease-in-out transform">
      <div className="flex flex-col justify-start items-center gap-4">
        <div className="flex justify-end items-center gap-2">
          <div className="text-right text-[#212832] text-xl font-medium font-['Tajawal']">
            {name}
          </div>
          <img
            className="w-[38px] h-[38px] rounded-full"
            src={image}
            alt={`${name}'s profile picture`}
            loading="lazy"
          />
        </div>
        <p className="text-center text-[#3e5066] text-[15px] font-medium font-['Tajawal'] leading-relaxed">
          {testimonial}
        </p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`h-6 w-6 ${
                i < 4 ? "text-yellow-500" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
