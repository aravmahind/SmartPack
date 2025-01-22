import React, { useState } from "react";

const PlannerComponent = () => {
  const [locations, setLocations] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleAddLocation = () => {
    setLocations([...locations, ""]);
  };

  const handleLocationChange = (index, value) => {
    const updatedLocations = [...locations];
    updatedLocations[index] = value;
    setLocations(updatedLocations);
  };

  const handleGenerateSuggestions = () => {
    const items = locations.map((location) => {
      if (location.toLowerCase().includes("beach")) {
        return { location, items: ["Sunscreen", "Swimwear", "Sandals"] };
      } else if (location.toLowerCase().includes("mountain")) {
        return { location, items: ["Hiking Boots", "Jacket", "Backpack"] };
      } else if (location.toLowerCase().includes("city")) {
        return { location, items: ["Casual Wear", "Comfortable Shoes", "Camera"] };
      } else {
        return { location, items: ["Basic Essentials", "Weather-Appropriate Clothing"] };
      }
    });
    setSuggestions(items);
  };

  return (
    <div className="p-8 bg-dark_purple min-h-screen">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 animate-pulse">
          SmartPack - Travel Planner
        </h1>
        <p className="text-lg text-white opacity-90">
          Plan your trip efficiently with personalized packing suggestions.
        </p>
      </header>

      {/* Add Locations Button */}
      <div className="text-center mb-10">
        <button
          onClick={handleAddLocation}
          className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-purple-700 transition-transform transform hover:scale-105"
        >
          + Add Location
        </button>
      </div>

      {/* Location input fields */}
      <div className="mb-8">
        {locations.map((location, index) => (
          <div
            key={index}
            className="mb-6 bg-input_purple bg-opacity-80 p-4 rounded-lg shadow-lg"
          >
            <label className="block text-sm font-medium text-purple-300 mb-1">
              Location {index + 1}:
            </label>
            <input
              type="text"
              className="border rounded-lg p-3 w-full max-w-md bg-input_purple bg-opacity-50 text-white placeholder-gray-400 focus:ring-4 focus:ring-purple-600 focus:outline-none shadow-md"
              value={location}
              onChange={(e) => handleLocationChange(index, e.target.value)}
              placeholder={`Enter Location ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Generate Suggestions Button */}
      {locations.length > 0 && (
        <div className="text-center">
          <button
            onClick={handleGenerateSuggestions}
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-purple-700 transition-transform transform hover:scale-105"
          >
            Generate Packing Suggestions
          </button>
        </div>
      )}

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Packing Suggestions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="bg-input_purple bg-opacity-80 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-4">
                  {suggestion.location}
                </h3>
                <ul className="list-disc list-inside text-white">
                  {suggestion.items.map((item, idx) => (
                    <li key={idx} className="text-gray-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlannerComponent;
