import React from 'react';

const Filter = ({ filters, setFilters }) => {
  const handleTitleChange = (e) => {
    setFilters({ ...filters, title: e.target.value });
  };

  const handleRatingChange = (e) => {
    setFilters({ ...filters, rating: Number(e.target.value) });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-10 px-6 animate-fade-in">
      <input
        type="text"
        placeholder="🔍 Search by title"
        value={filters.title}
        onChange={handleTitleChange}
        className="px-5 py-3 w-72 sm:w-80 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-lg"
      />
      <input
        type="number"
        placeholder="⭐ Minimum Rating"
        value={filters.rating}
        min="0"
        max="10"
        step="0.1"
        onChange={handleRatingChange}
        className="px-5 py-3 w-72 sm:w-80 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg"
      />
    </div>
  );
};

export default Filter;
