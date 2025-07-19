import React from "react";

const LeafButton = ({ showAll, setShowAll }) => {
  return (
    <button
      onClick={() => setShowAll(!showAll)}
      className="relative w-32 h-32 group animate-[float_4s_ease-in-out_infinite] transition-all duration-300"
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF99" />
            <stop offset="100%" stopColor="#00CC66" />
          </linearGradient>
          <filter id="glow">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#00FF99" />
          </filter>
        </defs>

        <path
          d="M100,10 C60,30 20,70 50,120 C80,170 120,170 150,120 C180,70 140,30 100,10 Z"
          fill="url(#leafGradient)"
          stroke="#008f5e"
          strokeWidth="3"
          filter="url(#glow)"
        />
      </svg>

      <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold pointer-events-none drop-shadow-[0_0_3px_#00FF99]">
        {showAll ? "View Less" : "View All"}
      </span>
    </button>
  );
};

export default LeafButton;
