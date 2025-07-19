import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { ThemeContext } from '../../providers/ThemeContext';

const AddPlant = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  // Olive green colors
  const colors = {
    oliveGreen1: '#7d9733',
    oliveGreen2: '#a8b32f',
    oliveGreen3: '#93a844',
    creamWhite: '#fefcf5',
    darkOliveText: '#3a4b12',
  };

  const handleAddPlant = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const plantData = Object.fromEntries(formData.entries());

    fetch('http://localhost:3000/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plantData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Successfully Added!',
            icon: 'success',
            confirmButtonColor: colors.oliveGreen1,
          });
          e.target.reset();
        }
      });
  };

  const inputClass = `w-full p-4 rounded-xl border transition-colors duration-300
    ${
      isDark
        ? `bg-gray-700 border-[#7d9733] text-[#a8b32f] placeholder-[#93a844] focus:outline-none focus:ring-2 focus:ring-[#a8b32f]`
        : `bg-white border-[#a8b32f] text-[#3a4b12] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7d9733]`
    }`;

  return (
    <div
      className={`max-w-7xl mx-auto rounded-3xl mt-2 w-full min-h-screen flex items-center justify-center p-6
      ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-[#a8b32f]'
          : 'bg-gradient-to-br from-[#d5d99d] to-[#dcf190] text-[#3a4b12]'
      }`}
    >
      <div
        className={`w-full max-w-4xl rounded-2xl p-10 shadow-lg transition-colors duration-300
        ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-[#a8b32f]'}`}
      >
        <h2
          className={`text-4xl font-bold text-center mb-10 drop-shadow-md ${
            isDark ? 'text-[#a8b32f]' : 'text-[#7d9733]'
          }`}
        >
          🌱 Add a New Plant
        </h2>

        <form className="space-y-8" onSubmit={handleAddPlant}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={`block mb-2 font-semibold ${isDark ? 'text-[#93a844]' : 'text-[#3a4b12]'}`}>
                Plant Name
              </label>
              <input type="text" name="plantName" placeholder="Enter plant name" className={inputClass} required />
            </div>

            <div>
              <label className={`block mb-2 font-semibold ${isDark ? 'text-[#93a844]' : 'text-[#3a4b12]'}`}>
                Category
              </label>
              <select name="category" className={inputClass} required>
                <option value="">Select category</option>
                <option value="succulent">Succulent</option>
                <option value="fern">Fern</option>
                <option value="flowering">Flowering</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={`block mb-2 font-semibold ${isDark ? 'text-[#93a844]' : 'text-[#3a4b12]'}`}>
                Care Level
              </label>
              <select name="careLevel" className={inputClass} required>
                <option value="">Select care level</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>

            <div>
              <label className={`block mb-2 font-semibold ${isDark ? 'text-[#93a844]' : 'text-[#3a4b12]'}`}>
                Watering Frequency
              </label>
              <input
                type="text"
                name="wateringFrequency"
                placeholder="e.g., Twice a week"
                className={inputClass}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={`block mb-2 font-semibold ${isDark ? 'text-[#93a844]' : 'text-[#3a4b12]'}`}>
                Last Watered Date
              </label>
              <input type="date" name="lastWateredDate" className={inputClass} required />
            </div>

            <div>
              <label className={`block mb-2 font-semibold ${isDark ? 'text-[#93a844]' : 'text-[#3a4b12]'}`}>
                Next Watering Date
              </label>
              <input type="date" name="nextWateringDate" className={inputClass} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={`block mb-2 font-semibold ${isDark ? 'text-[#93a844]' : 'text-[#3a4b12]'}`}>
                Health Status
              </label>
              <input
                type="text"
                name="healthStatus"
                placeholder="e.g., Healthy, Needs care"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={`block mb-2 font-semibold ${isDark ? 'text-[#93a844]' : 'text-[#3a4b12]'}`}>
                Image URL
              </label>
              <input type="text" name="image" placeholder="Paste image URL" className={inputClass} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={`block mb-2 font-semibold ${isDark ? 'text-[#93a844]' : 'text-[#3a4b12]'}`}>
                User Email
              </label>
              <input type="email" name="userEmail" defaultValue={user?.email || ''} readOnly className={inputClass} />
            </div>

            <div>
              <label className={`block mb-2 font-semibold ${isDark ? 'text-[#93a844]' : 'text-[#3a4b12]'}`}>
                User Name
              </label>
              <input type="text" name="userName" defaultValue={user?.displayName || ''} readOnly className={inputClass} />
            </div>
          </div>

          <div>
            <label className={`block mb-2 font-semibold ${isDark ? 'text-[#93a844]' : 'text-[#3a4b12]'}`}>
              Description
            </label>
            <textarea name="description" rows="4" placeholder="Describe your plant..." className={inputClass} required />
          </div>

          <button
            type="submit"
            className={`w-full py-4 rounded-xl text-lg font-semibold shadow-md transition-all
              ${
                isDark
                  ? 'bg-[#7d9733] hover:bg-[#93a844] text-[#fefcf5]'
                  : 'bg-[#a8b32f] hover:bg-[#7d9733] text-[#fefcf5]'
              }`}
          >
            🌿 Add Plant
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlant;
