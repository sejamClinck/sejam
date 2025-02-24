import doctor1 from "../../assets/img/doctors/image.png";
import doctor2 from "../../assets/img/doctors/image2.png";
import doctor3 from "../../assets/img/doctors/image3.png";
import doctor4 from "../../assets/img/doctors/image4.png";

const TeamImages = () => {
  return (
    <section
      aria-labelledby="team-images-section"
      role="region"
      className="py-10"
    >
      <h2 id="team-images-section" className="sr-only">
        Team Doctors Images
      </h2>
      <div className="relative max-w-8xl md:mx-10 mx-auto px-5 md:px-10 rounded-t-2xl bg-white p-3">
        <div className="flex md:flex-row flex-col">
          <div className="basis-1/2 p-3 flex items-center justify-center">
            <figure className="w-full">
              <img
                className="w-full rounded"
                src={doctor1}
                alt="Dr. 1 team member"
                loading="lazy"
              />
              <figcaption className="sr-only">Image of Dr. 1</figcaption>
            </figure>
          </div>
          <div className="basis-1/2 p-3 flex flex-row items-center gap-5 justify-end">
            <div className="w-full flex flex-col gap-5">
              <div className="basis-1/2">
                <figure>
                  <img
                    className="w-full rounded"
                    src={doctor2}
                    alt="Dr. 2 team member"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">Image of Dr. 2</figcaption>
                </figure>
              </div>
              <div className="basis-1/2">
                <figure>
                  <img
                    className="w-full rounded"
                    src={doctor3}
                    alt="Dr. 3 team member"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">Image of Dr. 3</figcaption>
                </figure>
              </div>
            </div>
            <div className="w-full">
              <figure>
                <img
                  className="w-full rounded"
                  src={doctor4}
                  alt="Dr. 4 team member"
                  loading="lazy"
                />
                <figcaption className="sr-only">Image of Dr. 4</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamImages;
