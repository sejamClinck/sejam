const DoctorBanner = ({ banner, altText = "Banner image of our doctor" }) => {
  return (
    <div className="relative h-[500px] max-w-8xl md:mx-10 mx-auto px-5 md:px-10 rounded-t-2xl p-3">
      <div className="w-full h-full object-cover rounded-2xl overflow-hidden mt-5">
        {banner ? (
          <img
            className="w-full h-full object-cover"
            src={banner}
            alt={altText}
            loading="lazy" // Lazy loading for better performance
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Image not available</p>{" "}
            {/* Placeholder for missing image */}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorBanner;
