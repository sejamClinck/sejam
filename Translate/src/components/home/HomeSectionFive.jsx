import SectionFiveSwapper from "./sectionFive/SectionFIveSwapper";
import SectionHeader from "./sectionFive/ContentSection";
const HomeSectionFive = () => {
  return (
    <section aria-labelledby="section-heading w-full">
      <div className="w-full max-w-[11768px] m-auto h-[697px] flex p-5 md:p-[50px] flex-col justify-start items-start gap-6">
        <SectionHeader />
        <SectionFiveSwapper />
      </div>
    </section>
  );
};

export default HomeSectionFive;
