const NavigationButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="bg-red-500 p-3 rounded-lg text-white transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
    aria-label={`${direction} Testimonial`}
  >
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline
        points={direction === "Next" ? "15 6 9 12 15 18" : "9 6 15 12 9 18"}
      />
    </svg>
  </button>
);

export default NavigationButton;
