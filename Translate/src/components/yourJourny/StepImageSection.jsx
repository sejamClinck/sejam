const StepImageSection = ({ image, title }) => {
  return (
    <div className="w-full md:basis-1/2 flex items-center justify-center md:justify-end">
      <img
        className="rounded-full max-w-full h-auto"
        src={image}
        alt={title}
        loading="lazy"
      />
    </div>
  );
};
export default StepImageSection;
