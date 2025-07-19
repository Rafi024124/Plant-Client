import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeContext';

const UpdatePlant = () => {
  const plant = useLoaderData();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const {
    _id,
    plantName,
    category,
    careLevel,
    wateringFrequency,
    lastWateredDate,
    nextWateringDate,
    healthStatus,
    image,
    userEmail,
    userName,
    description,
  } = plant;

  const handleUpdatePlant = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedPlant = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/plants/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Successfully Updated!',
            icon: 'success',
            confirmButtonColor: '#4CAF50',
          });
          navigate('/myPlants');
        }
      });
  };

  const inputClass = `w-full p-4 rounded-xl border transition-colors duration-300
    ${
      isDark
        ? 'bg-gray-700 border-gray-600 text-green-300 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500'
        : 'bg-white border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'
    }`;

  return (
    <div
      className={`max-w-7xl mx-auto rounded-3xl mt-2 w-full min-h-screen flex items-center justify-center p-6
      ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-green-300'
          : 'bg-gradient-to-br from-green-100 to-green-200 text-green-900'
      }
      `}
    >
      <div
        className={`w-full max-w-4xl rounded-2xl p-10 shadow-lg transition-colors duration-300
        ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-green-200'}`}
      >
        <h2 className={`text-4xl font-bold text-center mb-10 drop-shadow-md ${
          isDark ? 'text-green-300' : 'text-green-700'
        }`}>
          🌿 Update Plant Info
        </h2>

        <form className="space-y-8" onSubmit={handleUpdatePlant}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={`block mb-2 font-semibold ${
                isDark ? 'text-green-400' : 'text-gray-700'
              }`}>Plant Name</label>
              <input type="text" name="plantName" defaultValue={plantName} className={inputClass} required />
            </div>
            <div>
              <label className={`block mb-2 font-semibold ${
                isDark ? 'text-green-400' : 'text-gray-700'
              }`}>Category</label>
              <select name="category" defaultValue={category} className={inputClass} required>
                <option value="succulent">Succulent</option>
                <option value="fern">Fern</option>
                <option value="flowering">Flowering</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={`block mb-2 font-semibold ${
                isDark ? 'text-green-400' : 'text-gray-700'
              }`}>Care Level</label>
              <select name="careLevel" defaultValue={careLevel} className={inputClass} required>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>
            <div>
              <label className={`block mb-2 font-semibold ${
                isDark ? 'text-green-400' : 'text-gray-700'
              }`}>Watering Frequency</label>
              <input type="text" name="wateringFrequency" defaultValue={wateringFrequency} className={inputClass} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={`block mb-2 font-semibold ${
                isDark ? 'text-green-400' : 'text-gray-700'
              }`}>Last Watered Date</label>
              <input type="date" name="lastWateredDate" defaultValue={lastWateredDate} className={inputClass} required />
            </div>
            <div>
              <label className={`block mb-2 font-semibold ${
                isDark ? 'text-green-400' : 'text-gray-700'
              }`}>Next Watering Date</label>
              <input type="date" name="nextWateringDate" defaultValue={nextWateringDate} className={inputClass} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={`block mb-2 font-semibold ${
                isDark ? 'text-green-400' : 'text-gray-700'
              }`}>Health Status</label>
              <input type="text" name="healthStatus" defaultValue={healthStatus} className={inputClass} required />
            </div>
            <div>
              <label className={`block mb-2 font-semibold ${
                isDark ? 'text-green-400' : 'text-gray-700'
              }`}>Image URL</label>
              <input type="text" name="image" defaultValue={image} className={inputClass} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={`block mb-2 font-semibold ${
                isDark ? 'text-green-400' : 'text-gray-700'
              }`}>User Email</label>
              <input
                type="email"
                name="userEmail"
                defaultValue={userEmail}
                className={inputClass}
                readOnly
              />
            </div>
            <div>
              <label className={`block mb-2 font-semibold ${
                isDark ? 'text-green-400' : 'text-gray-700'
              }`}>User Name</label>
              <input
                type="text"
                name="userName"
                defaultValue={userName}
                className={inputClass}
                readOnly
              />
            </div>
          </div>

          <div>
            <label className={`block mb-2 font-semibold ${
              isDark ? 'text-green-400' : 'text-gray-700'
            }`}>Description</label>
            <textarea
              name="description"
              defaultValue={description}
              rows="4"
              className={inputClass}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-4 rounded-xl text-lg font-semibold shadow-md transition-all
              ${
                isDark
                  ? 'bg-green-700 hover:bg-green-600 text-green-100'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }
            `}
          >
            ✅ Update Plant
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlant;
