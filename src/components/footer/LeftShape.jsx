const LeftShape = () => {
  return (
    <div className="left-shape-container w-[330px] h-[500px] hidden md:flex absolute left-[-230px] top-0">
      <div className="outer-circle w-[330px] h-[330px] absolute rounded-full border border-[#fab5a3]"></div>
      <div className="dashed-circle w-[291px] h-[291px] absolute left-[28px] top-[209px] rounded-full border-dashed border-2 border-[#fab5a3]"></div>
      <div className="small-dot w-[12px] h-[12px] absolute right-[35px] top-[261px] bg-[#eb6a48] rounded-full"></div>
    </div>
  );
};

export default LeftShape;
