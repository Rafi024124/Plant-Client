import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { ThemeContext } from '../../providers/ThemeContext'; // Added
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext); // Use theme from context
  const isDark = theme === 'dark';
  
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/plants?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setPlants(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This Plant will be permanently removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8B4513",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/plants/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Plant has been removed.", "success");
              const remaining = plants.filter(plant => plant._id !== _id);
              setPlants(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/updatePlant/${id}`);
  };

  const handleViewDetails = (id) => {
    navigate(`/plantDetails/${id}`);
  };

  if (loading) {
    return <div className="text-center mt-10 text-green-600">Loading your plants...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className={`text-3xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-green-700'}`}>
        My Plants
      </h2>

      {plants.length === 0 ? (
        <p className={`${isDark ? 'text-green-200' : 'text-gray-500'} text-lg`}>
          You haven't added any plants yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <div
              key={plant._id}
              className={`shadow-md rounded-lg overflow-hidden hover:shadow-xl transition
                ${isDark ? 'bg-gray-800 text-green-200' : 'bg-white text-green-800'}
              `}
            >
              <div className="w-full h-48">
                <img
                  src={plant.image || 'https://via.placeholder.com/300x200?text=No+Image'}
                  alt={plant.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{plant.plantName}</h3>
                <p className={`${isDark ? 'text-green-300' : 'text-gray-600'} text-sm mt-1`}>{plant.category}</p>
                <p className={`${isDark ? 'text-green-400' : 'text-gray-500'} text-sm mt-2`}>
                  {plant.description?.slice(0, 80)}...
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleUpdate(plant._id)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-3 py-1 rounded"
                    data-tooltip-id={`tooltip-update-${plant._id}`}
                    data-tooltip-content="Update this plant"
                    data-tooltip-place="top"
                  >
                    Update
                  </button>
                  <Tooltip id={`tooltip-update-${plant._id}`} />

                  <button
                    onClick={() => handleDelete(plant._id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                    data-tooltip-id={`tooltip-delete-${plant._id}`}
                    data-tooltip-content="Delete this plant"
                    data-tooltip-place="top"
                  >
                    Delete
                  </button>
                  <Tooltip id={`tooltip-delete-${plant._id}`} />

                  <button
                    onClick={() => handleViewDetails(plant._id)}
                    className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded"
                    data-tooltip-id={`tooltip-view-${plant._id}`}
                    data-tooltip-content="View plant details"
                    data-tooltip-place="top"
                  >
                    View Details
                  </button>
                  <Tooltip id={`tooltip-view-${plant._id}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlants;
