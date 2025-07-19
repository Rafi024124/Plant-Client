import React, { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeContext';

const beginnerPlants = [
  {
    name: 'Snake Plant',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80',
    description: 'Very low maintenance, tolerates low light and infrequent watering.',
  },
  {
    name: 'Spider Plant',
    image: 'https://i.ibb.co/7J6ZwSg2/imgb11.jpg',
    description: 'Adaptable and easy to grow, thrives in indirect light.',
  },
  {
    name: 'Pothos',
    image: 'https://i.ibb.co/V0NCn7Hh/imgbb2.jpg',
    description: 'Tolerant of low light and irregular watering, fast-growing vine.',
  },
];

const BegginerFriendlyPlants = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  // Olive green colors
  const oliveColors = {
    darkBgStart: '#2f3a11',
    darkBgMiddle: '#3d4a15',
    darkBgEnd: '#2f3a11',
    darkText: '#9cbf3c',
    darkShadow: 'rgba(156, 191, 60, 0.7)',
    lightBgStart: '#f0f2d0',
    lightBgMiddle: '#e6ebad',
    lightBgEnd: '#f0f2d0',
    lightText: '#61722e',
    lightCardBg: '#f9fae7',
    lightCardShadow: 'rgba(97, 114, 46, 0.4)',
  };

  return (
    <section
      className={`max-w-7xl mx-auto px-6 py-16 rounded-3xl shadow-lg mt-12
        ${
          isDark
            ? `bg-gradient-to-r from-[${oliveColors.darkBgStart}] via-[${oliveColors.darkBgMiddle}] to-[${oliveColors.darkBgEnd}] text-[${oliveColors.darkText}]`
            : `bg-gradient-to-r from-[${oliveColors.lightBgStart}] via-[${oliveColors.lightBgMiddle}] to-[${oliveColors.lightBgEnd}] text-[${oliveColors.lightText}]`
        }
      `}
    >
      <h2 className="text-4xl font-bold text-center mb-10 drop-shadow-md">
        🌱 Beginner-Friendly Plants
      </h2>
      <p className={`text-center max-w-3xl mx-auto mb-12 ${isDark ? 'text-[#9cbf3c]' : 'text-[#61722e]'}`}>
        Starting your plant journey? These plants are perfect for beginners because they’re resilient and easy to care for.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {beginnerPlants.map(({ name, image, description }, i) => (
          <div
            key={i}
            className={`rounded-2xl p-5 flex flex-col items-center text-center transition-shadow duration-300 shadow-md
              ${
                isDark
                  ? `bg-[#3d4a15] hover:shadow-[0_0_15px_5px_rgba(156,191,60,0.7)]`
                  : `bg-[${oliveColors.lightCardBg}] hover:shadow-[0_0_15px_5px_rgba(97,114,46,0.4)]`
              }
            `}
          >
            <div className="w-36 h-36 mb-4 overflow-hidden rounded-xl shadow-lg border-4 border-[#9cbf3c]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-[#9cbf3c]' : 'text-[#61722e]'}`}>{name}</h3>
            <p className={`${isDark ? 'text-[#b5ce55]' : 'text-[#7b8743]'} text-sm`}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BegginerFriendlyPlants;
