const KeywordTag = ({ keyword, isActive, onClick }) => (
  <div
    className={`px-2 py-2.5 ${
      isActive ? "bg-[#507a8a]" : "bg-[#fef4f2]"
    } rounded-[120px] justify-center items-center gap-2.5 flex cursor-pointer`}
    onClick={onClick}
  >
    <div className="w-8 h-8 relative border border-red-400 rounded-full flex items-center justify-center">
      <svg
        className="h-5 w-5 text-red-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="17" y1="7" x2="7" y2="17" />
        <polyline points="17 17 7 17 7 7" />
      </svg>
    </div>
    <div
      className={`text-right ${
        isActive ? "text-white" : "text-black"
      } text-sm font-normal font-['Segoe UI']`}
    >
      {keyword}
    </div>
  </div>
);

export default KeywordTag;
