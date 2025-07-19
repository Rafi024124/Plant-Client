import React, { useContext } from 'react';
import { useLoaderData, useNavigate, useLocation } from 'react-router';
import { ThemeContext } from '../../providers/ThemeContext';

const PlantDetails = () => {
  const plant = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const previousPage = location.state?.from;

  const {
    image,
    plantName,
    category,
    description,
    careLevel,
    wateringFrequency,
    lastWateredDate,
    nextWateringDate,
    healthStatus,
    userEmail,
    userName,
  } = plant;

  // Custom Colors (your palette)
  const colors = {
    backgroundLight: '#f6f5e9',
    oliveGreen1: '#7d9733',
    oliveGreen2: '#a8b32f',
    oliveGreen3: '#93a844',
    darkOliveText: '#3a4b12',
    creamWhite: '#fefcf5', // soft white
    buttonBg: '#7d9733',
    buttonBgHover: '#93a844',
  };

  return (
    <main
      style={{
        backgroundColor: colors.backgroundLight,
        color: isDark ? colors.creamWhite : colors.darkOliveText,
      }}
      className="min-h-screen flex flex-col items-center justify-start px-6 py-12"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(previousPage || -1)}
        style={{
          backgroundColor: colors.buttonBg,
          color: colors.creamWhite,
        }}
        className="self-start mb-8 px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive-600"
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = colors.buttonBgHover)}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = colors.buttonBg)}
      >
        ← Back
      </button>

      {/* Card Container */}
      <section
        style={{
          backgroundColor: colors.creamWhite,
          borderColor: colors.oliveGreen1,
          color: colors.darkOliveText,
        }}
        className="w-full max-w-5xl flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden border"
      >
        {/* Left Side - Image */}
        <div
          style={{
            background: `linear-gradient(135deg, ${colors.backgroundLight}, #e3e4d9)`,
          }}
          className="md:w-1/2 flex justify-center items-center p-6 md:p-10"
        >
          <img
            src={image}
            alt={plantName}
            className="rounded-3xl object-cover w-full max-h-[400px] shadow-lg border"
            style={{
              borderColor: colors.oliveGreen3,
              boxShadow: `0 10px 15px -3px rgba(125,151,51,0.4), 0 4px 6px -2px rgba(125,151,51,0.1)`,
            }}
            loading="lazy"
          />
        </div>

        {/* Right Side - Details */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h1
              style={{ color: colors.oliveGreen2 }}
              className="text-5xl font-extrabold mb-4"
            >
              {plantName}
            </h1>

            <p className="text-lg leading-relaxed mb-6" style={{ color: colors.darkOliveText }}>
              {description}
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-10 text-sm md:text-base">
              <DetailItem
                label="Category"
                value={category}
                bgColor={colors.oliveGreen1}
                textColor={colors.creamWhite}
                icon="🌿"
              />
              <DetailItem
                label="Care Level"
                value={careLevel}
                bgColor="#d9d78e" // a warm yellowish-green pastel
                textColor={colors.darkOliveText}
                icon="🪴"
              />
              <DetailItem
                label="Watering Frequency"
                value={`Every ${wateringFrequency} days`}
                bgColor="#c8dba1" // lighter olive green
                textColor={colors.darkOliveText}
                icon="💧"
              />
              <DetailItem
                label="Last Watered"
                value={lastWateredDate}
                bgColor="#e1e5c2"
                textColor={colors.darkOliveText}
                icon="🗓️"
              />
              <DetailItem
                label="Next Watering"
                value={nextWateringDate}
                bgColor="#d7e1b6"
                textColor={colors.darkOliveText}
                icon="📅"
              />
              <DetailItem
                label="Health Status"
                value={healthStatus}
                bgColor="#bac46b"
                textColor={colors.creamWhite}
                icon="❤️"
              />
            </div>
          </div>

          {/* Added By */}
          <footer
            style={{ borderColor: colors.oliveGreen1, color: colors.darkOliveText }}
            className="mt-10 pt-6 border-t text-sm md:text-base"
          >
            Added by: <span className="font-semibold">{userName}</span> ({userEmail})
          </footer>
        </div>
      </section>
    </main>
  );
};

const DetailItem = ({ label, value, bgColor, textColor, icon }) => (
  <div className="flex items-center gap-3">
    <span className="text-2xl">{icon}</span>
    <div>
      <h3 className="font-semibold" style={{ color: textColor }}>
        {label}
      </h3>
      <p
        className="inline-block px-3 py-1 rounded-full font-medium shadow-sm"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          boxShadow: `0 2px 6px rgba(0,0,0,0.1)`,
        }}
      >
        {value}
      </p>
    </div>
  </div>
);

export default PlantDetails;
