import React, { useContext } from 'react';
import { FaTint, FaSun, FaLeaf, FaCut } from 'react-icons/fa';
import { ThemeContext } from '../providers/ThemeContext';

const mistakes = [
  {
    icon: <FaTint className="w-8 h-8" style={{ color: '#7d9733' }} />, // olive green 1
    title: 'Overwatering',
    description:
      'Watering too often or too much can drown roots and cause root rot. Let soil dry out between watering.',
  },
  {
    icon: <FaTint className="w-8 h-8" style={{ color: '#a8b32f' }} />, // olive green 2
    title: 'Underwatering',
    description:
      'Not giving enough water causes wilting and dry leaves. Know your plant’s watering needs.',
  },
  {
    icon: <FaSun className="w-8 h-8" style={{ color: '#93a844' }} />, // olive green 3
    title: 'Wrong Lighting Conditions',
    description:
      'Placing shade-loving plants in direct sunlight or sun-loving plants in low light can stress or kill them.',
  },
  {
    icon: <FaLeaf className="w-8 h-8" style={{ color: '#7d9733' }} />, // olive green 1
    title: 'Ignoring Soil Quality',
    description:
      'Using poor or wrong soil can suffocate roots or retain too much water. Use plant-specific potting mix.',
  },
  {
    icon: <FaCut className="w-8 h-8" style={{ color: '#a53e2f' }} />, // warm muted red
    title: 'Skipping Regular Pruning',
    description:
      'Dead leaves and branches invite pests and disease. Prune regularly to keep plants healthy.',
  },
];

const TopPlantCareMistakes = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  // Your color palette
  const colors = {
    backgroundLight: '#f6f5e9',
    backgroundDark: '#2f3a1b',
    cardLight: '#fefcf5',
    cardDark: '#3a4b12',
    textLight: '#3a4b12',
    textDark: '#fefcf5',
    oliveGreen1: '#7d9733',
    oliveGreen2: '#a8b32f',
    oliveGreen3: '#93a844',
    redAccent: '#a53e2f',
  };

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-16 rounded-3xl shadow-lg mt-12"
      style={{
        backgroundColor: isDark ? colors.backgroundDark : colors.backgroundLight,
        color: isDark ? colors.textDark : colors.textLight,
      }}
    >
      <h2
        className="text-4xl font-bold text-center mb-10 drop-shadow-md"
        style={{ color: isDark ? colors.oliveGreen3 : colors.oliveGreen1 }}
      >
        🌿 Top Plant Care Mistakes to Avoid
      </h2>
      <p
        className="text-center max-w-3xl mx-auto mb-12"
        style={{ color: isDark ? '#b3c169' : '#6b7c19' }}
      >
        Many plants struggle because of simple mistakes. Avoid these common errors to keep your plants thriving and beautiful.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {mistakes.map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-shadow duration-300"
            style={{
              backgroundColor: isDark ? colors.cardDark : colors.cardLight,
              boxShadow: isDark
                ? `0 4px 15px 0 ${colors.oliveGreen2}99`
                : `0 4px 15px 0 ${colors.oliveGreen1}55`,
            }}
          >
            <div className="mb-4">{icon}</div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: isDark ? colors.oliveGreen3 : colors.oliveGreen1 }}
            >
              {title}
            </h3>
            <p
              className="text-sm"
              style={{ color: isDark ? '#b3c169' : '#6b7c19' }}
            >
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPlantCareMistakes;
