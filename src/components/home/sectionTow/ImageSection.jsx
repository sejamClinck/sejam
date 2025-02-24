import smailsection from "../../../assets/img/homeimages/smailsection.png";
const ImageSection = () => {
  return (
    <figure className="rounded-lg shadow-secondary-1">
      <div className="max-w-2xl m-auto flex  gap-5">
        <div className="flex flex-col gap-5 mt-[-10px]">
          <img
            className="rounded-[13.81px]"
            src={smailsection}
            alt="Doctor image 1"
          />
        </div>
      </div>
    </figure>
    // <article className="">
    //   <img src={smailsection} alt="" />
    // </article>
  );
};

export default ImageSection;
