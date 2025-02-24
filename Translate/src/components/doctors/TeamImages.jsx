import doctor1 from "../../assets/img/doctors/image.png";
import doctor2 from "../../assets/img/doctors/image2.png";
import doctor3 from "../../assets/img/doctors/image3.png";
import doctor4 from "../../assets/img/doctors/image4.png";

const TeamImages = () => {
  return (
    <section aria-labelledby="team-images-section" role="region">
      <div className="relative max-w-8xl mx-0 md:mx-10 mx-auto px-5 md:px-10 rounded-t-2xl bg-white p-3">
        <div className="flex flex-row md:flex-row flex-col">
          <div className="basis-1/2 p-3 flex items-center justify-center">
            <div className="w-full">
              {/* Added alt text for SEO and accessibility, and lazy loading */}
              <img
                className="w-full"
                src={doctor1}
                alt="صورة الدكتور 1"
                loading="lazy"
              />
            </div>
          </div>
          <div className="basis-1/2 p-3 flex flex-row items-center gap-5 justify-end">
            <div className="w-full flex flex-col gap-5">
              <div className="basis-1/2">
                <img
                  className="w-full"
                  src={doctor2}
                  alt="صورة الدكتور 2"
                  loading="lazy"
                />
              </div>
              <div className="basis-1/2">
                <img
                  className="w-full"
                  src={doctor3}
                  alt="صورة الدكتور 3"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full">
              <img
                className="w-full"
                src={doctor4}
                alt="صورة الدكتور 4"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamImages;
