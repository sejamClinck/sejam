import frame51 from "../../../assets/img/homeimages/Frame51.png";
import frame52 from "../../../assets/img/homeimages/Frame52.png";
import Decorations from "./Decorations";

const SectionTitle = ({ title }) => (
  <div className="h-[71px] px-5 flex justify-center items-center gap-4 text-center mt-10">
    <div className="w-16 hidden h-16 p-3 rotate-[25deg] mt-[-50px] transform rotate-155 bg-white rounded-xl border-2 border-[#eb6a48] sm:flex justify-center items-center">
      <img src={frame51} alt="Decorative Frame" className="w-10 h-10 " />
    </div>
    <div className="md:w-[40%]  max-ms:w-[100%] px-5 flex justify-center items-center gap-4 text-center ">
      <Decorations />
      <h2
        className="text-[#292929] text-2xl font-semibold leading-[31.2px] font-['Segoe UI']   "
        dir="rtl"
      >
        {title}
      </h2>
      <Decorations />
    </div>
    <div className="hidden w-16 h-16 p-3 transform rotate-25 rotate-[-25deg]  bg-white rounded-xl border-2 border-[#eb6a48] sm:flex justify-center items-center">
      <img src={frame52} alt="Decorative Frame" className="w-10 h-10 " />
    </div>
  </div>
);

export default SectionTitle;
