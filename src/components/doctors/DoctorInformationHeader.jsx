const DoctorInformationHeader = () => {
  return (
    <main>
      <section
        className="bg-gradient-to-b from-white to-gray-50 py-10 md:py-20"
        aria-labelledby="headline"
      >
        <div className="relative max-w-8xl mx-auto px-5 md:px-10 rounded-t-2xl bg-white p-3">
          <header className="text-right flex flex-col" role="banner">
            <h1
              id="headline"
              className="text-[#323f47] text-[2rem] md:text-[4.8rem] font-bold"
              aria-label="Expertise and professionalism in every"
            >
              الخبرة والاحتراف في كل
            </h1>
            <h2
              className="text-[#e8604b] text-[2rem] md:text-[4.8rem] font-bold"
              aria-label="Smile"
            >
              ابتسامة
            </h2>
          </header>
        </div>
      </section>
    </main>
  );
};

export default DoctorInformationHeader;
