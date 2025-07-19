import React from 'react';
import leaf from '../assets/button.png';

const LeafSpinner = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <img
        src={leaf}
        alt="Loading..."
        className="w-16 h-16 leaf-spinner"
      />
      <style>
        {`
          @keyframes spinPulse {
            0% {
              transform: rotate(0deg) scale(1) skew(0deg, 0deg);
            }
            25% {
              transform: rotate(90deg) scale(1.1) skew(5deg, 5deg);
            }
            50% {
              transform: rotate(180deg) scale(1) skew(0deg, 0deg);
            }
            75% {
              transform: rotate(270deg) scale(1.1) skew(-5deg, -5deg);
            }
            100% {
              transform: rotate(360deg) scale(1) skew(0deg, 0deg);
            }
          }

          .leaf-spinner {
            animation: spinPulse 0.6s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default LeafSpinner;
