import React, { useState, useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../providers/ThemeContext";

const NewPlantsSection = ({ plants }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [showAll, setShowAll] = useState(false);
  const displayedPlants = showAll ? plants : plants.slice(0, 6);

  const colors = {
    backgroundLight: "#f6f5e9",
    backgroundDark: "#2c3a12",
    oliveGreen1: "#7d9733",
    oliveGreen2: "#a8b32f",
    oliveGreen3: "#93a844",
    darkOliveText: "#3a4b12",
    creamWhite: "#fefcf5",
    buttonShadowLight: "rgba(125, 151, 51, 0.27)",
    buttonShadowDark: "rgba(147, 168, 68, 0.54)",
  };

  return (
    <div
      className="max-w-5xl mx-auto px-4 py-12"
      style={{ backgroundColor: colors.backgroundLight }}
    >
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        style={{ color: isDark ? colors.oliveGreen3 : colors.oliveGreen1 }}
      >
        🌱 New Arrivals in the Garden
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {displayedPlants.map((plant, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            style={{
              backgroundColor: isDark ? colors.backgroundDark : colors.creamWhite,
              color: isDark ? colors.creamWhite : colors.darkOliveText,
              height: "280px",
              boxShadow: isDark
                ? `0 4px 15px 0 ${colors.buttonShadowDark}`
                : `0 4px 15px 0 ${colors.buttonShadowLight}`,
            }}
          >
            {/* Diagonal Image Container */}
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                clipPath: "polygon(0 0, 60% 0, 100% 100%, 0% 100%)",
                overflow: "hidden",
              }}
            >
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Text Content Box */}
            <div
              className="absolute top-0 right-0 w-[40%] h-full p-6 flex flex-col justify-center"
              style={{
                background: isDark
                  ? "rgba(34, 51, 14, 0.85)"
                  : "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(8px)",
                color: isDark ? colors.creamWhite : colors.darkOliveText,
              }}
            >
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: isDark ? colors.oliveGreen3 : colors.oliveGreen2 }}
              >
                {plant.plantName}
              </h3>
              <p
                className="text-sm mb-4 font-semibold"
                style={{ color: isDark ? colors.oliveGreen2 : colors.oliveGreen1 }}
              >
                {plant.category}
              </p>
              <p
                className="text-sm line-clamp-4"
                style={{ color: isDark ? colors.creamWhite : colors.darkOliveText }}
              >
                {plant.description}
              </p>
              <Link
                to={`/plantDetails/${plant._id}`}
                className="mt-4 inline-block font-semibold transition"
                style={{
                  color: isDark ? colors.oliveGreen3 : colors.oliveGreen1,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = isDark
                    ? colors.creamWhite
                    : colors.oliveGreen2)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isDark
                    ? colors.oliveGreen3
                    : colors.oliveGreen1)
                }
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {plants.length > 6 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            aria-pressed={showAll}
            className="relative inline-block w-36 h-12 group rounded-lg font-semibold transition-colors duration-300"
            style={{
              backgroundColor: isDark ? colors.oliveGreen1 : colors.oliveGreen3,
              color: colors.creamWhite,
              boxShadow: isDark
                ? `0 0 10px 2px ${colors.oliveGreen3}aa`
                : `0 0 8px 1px ${colors.oliveGreen2}cc`,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = isDark
                ? colors.oliveGreen3
                : colors.oliveGreen1)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = isDark
                ? colors.oliveGreen1
                : colors.oliveGreen3)
            }
          >
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default NewPlantsSection;
