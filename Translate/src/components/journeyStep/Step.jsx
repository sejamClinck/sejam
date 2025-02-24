const Step = ({ number, title, description, imageSrc, altText }) => {
  return (
    <article className="flex flex-col md:flex-row gap-3 my-10">
      <div className="basis-1/2 flex items-start justify-start">
        <p className="origin-top-left rotate-[-4.34deg] text-right text-[#eb6a48] text-[81.27px] font-normal font-['Sniglet']">
          {number}
        </p>
        <img
          className="rounded-full"
          src={imageSrc}
          alt={altText}
          loading="lazy"
        />
      </div>
      <div className="basis-1/2 flex items-center justify-center">
        <div className="text-right">
          <h2 className="text-[#292929] text-5xl font-semibold">{title}</h2>
          <p className="mt-5 text-[#3d3d3d] text-base font-semibold leading-7">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Step;
