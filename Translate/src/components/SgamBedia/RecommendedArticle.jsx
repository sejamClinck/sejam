const RecommendedArticle = ({ title, content }) => (
  <div className="w-full self-stretch h-20 flex-col justify-center items-start gap-2.5 flex">
    <div className="self-stretch p-[10px] h-20 bg-[#f6f6f6] rounded-[10px] flex-col justify-start items-start gap-2.5 flex">
      <div className="pl-[15px]   bg-[#f6f6f6] rounded-[10px] justify-end items-center inline-flex">
        <div className="self-stretch justify-between items-center inline-flex gap-3">
      
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch text-right text-black text-[13px] font-semibold font-['Segoe UI']">
              {title}
            </div>
            <div className="self-stretch text-right text-[#7c7c7c] text-[13px] font-['Segoe UI']">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecommendedArticle;
