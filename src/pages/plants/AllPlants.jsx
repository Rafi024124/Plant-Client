import { useLoaderData, useLocation, useNavigate } from "react-router";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeContext";

const AllPlants = () => {
  const plants = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  // Custom Colors (your palette)
  const colors = {
    backgroundLight: "#f6f5e9",
    oliveGreen1: "#7d9733",
    oliveGreen2: "#a8b32f",
    oliveGreen3: "#93a844",
    darkOliveText: "#3a4b12",
    creamWhite: "#fefcf5",
    buttonBg: "#7d9733",
    buttonBgHover: "#93a844",
    tableHeaderLight: "#a8b32f",
    tableHeaderDark: "#36521d",
    rowEvenLight: "#e8edc7",
    rowEvenDark: "#2e3a13",
  };

  const handleSortChange = (e) => {
    const sort = e.target.value;
    navigate(`/allPlants?sort=${sort}`);
  };

  return (
    <div
      className="mt-6 max-w-6xl mx-auto overflow-x-auto rounded-lg shadow-lg"
      style={{ backgroundColor: colors.backgroundLight, color: colors.darkOliveText }}
    >
      <div className="flex justify-end mb-4 px-4">
        <select
          onChange={handleSortChange}
          aria-label="Sort plants"
          className="select select-bordered max-w-xs"
          style={{
            borderColor: colors.oliveGreen1,
            color: colors.darkOliveText,
            backgroundColor: colors.creamWhite,
          }}
        >
          <option value="none">Sort by</option>
          <option value="wateringDateAsc">Next Watering Date (Asc)</option>
          <option value="wateringDateDesc">Next Watering Date (Desc)</option>
        </select>
      </div>

      <table
        role="table"
        className="min-w-full divide-y rounded-lg overflow-hidden"
        style={{
          borderCollapse: "separate",
          borderSpacing: 0,
          backgroundColor: isDark ? colors.darkOliveText : colors.creamWhite,
          color: isDark ? colors.creamWhite : colors.darkOliveText,
          boxShadow: isDark
            ? `0 0 20px 3px ${colors.oliveGreen2}80`
            : `0 0 10px 1px ${colors.oliveGreen1}40`,
        }}
      >
        <thead
          style={{
            backgroundColor: isDark ? colors.oliveGreen3 : colors.tableHeaderLight,
            color: isDark ? colors.creamWhite : colors.darkOliveText,
          }}
        >
          <tr>
            {["Image", "Name", "Category", "Watering Frequency", "Action"].map(
              (header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide select-none"
                  style={{ userSelect: "none" }}
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {plants.map((plant, idx) => (
            <tr
              key={plant._id}
              className="transition-transform duration-300 cursor-pointer"
              style={{
                backgroundColor:
                  idx % 2 === 0
                    ? isDark
                      ? colors.rowEvenDark
                      : colors.rowEvenLight
                    : "transparent",
                color: isDark ? colors.creamWhite : colors.darkOliveText,
                boxShadow: "inset 0 -1px 0 0 #a8b32f40",
              }}
              onClick={() => navigate(`/plantDetails/${plant._id}`, { state: { from: location.pathname } })}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigate(`/plantDetails/${plant._id}`, { state: { from: location.pathname } });
                }
              }}
              tabIndex={0}
              role="row"
            >
              <td className="px-6 py-3">
                <div className="avatar">
                  <div
                    className="mask mask-squircle h-14 w-14 overflow-hidden rounded-lg shadow-md border"
                    style={{
                      borderColor: isDark ? "#5b6b15" : colors.oliveGreen3,
                    }}
                  >
                    <img
                      src={plant.image}
                      alt={plant.plantName}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </td>
              <td className="font-semibold px-6 py-3">{plant.plantName}</td>
              <td className="px-6 py-3">{plant.category}</td>
              <td className="px-6 py-3">{plant.wateringFrequency} days</td>
              <td className="px-6 py-3">
                <Link
                  to={`/plantDetails/${plant._id}`}
                  state={{ from: location.pathname }}
                  className="inline-block"
                  onClick={(e) => e.stopPropagation()} // prevent triggering row click
                >
                  <button
                    className="btn btn-sm btn-outline transition-colors duration-300"
                    style={{
                      color: isDark ? colors.creamWhite : colors.oliveGreen2,
                      borderColor: isDark ? colors.creamWhite : colors.oliveGreen2,
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = isDark
                        ? colors.oliveGreen3
                        : colors.oliveGreen1;
                      e.currentTarget.style.color = colors.creamWhite;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = isDark
                        ? colors.creamWhite
                        : colors.oliveGreen2;
                    }}
                    data-tooltip-id={`tooltip-${plant._id}`}
                    data-tooltip-content={`View detailed info about ${plant.plantName}`}
                    data-tooltip-place="top"
                    aria-label={`View details about ${plant.plantName}`}
                  >
                    View Details
                  </button>
                </Link>
                <Tooltip id={`tooltip-${plant._id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPlants;
