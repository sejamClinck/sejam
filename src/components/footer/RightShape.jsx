const RightShape = () => {
  return (
    <div className="right-shape-container w-[330px] h-auto hidden md:flex absolute right-[-200px] top-0">
      <div className="outer-circle w-[330px] h-[330px] absolute top-0 left-0 rounded-full border border-[#fab5a3]"></div>
      <div className="dashed-circle w-[291px] h-[291px] absolute left-[28px] top-[209px] rounded-full border-dashed border-2 border-[#fab5a3]"></div>
      <div className="small-dot w-[12px] h-[12px] absolute left-[42px] top-[276px] bg-[#eb6a48] rounded-full"></div>
    </div>
  );
};

export default RightShape;
