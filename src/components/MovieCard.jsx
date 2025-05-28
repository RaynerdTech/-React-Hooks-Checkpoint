import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-6 transform hover:scale-105 hover:rotate-1 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-70 border border-gray-700">
      <div className="overflow-hidden rounded-2xl mb-4 shadow-lg">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="w-full h-72 object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h2 className="text-2xl font-bold text-pink-400 mb-2 text-center drop-shadow-md">
        {movie.title}
      </h2>
      <p className="text-sm text-gray-300 text-justify leading-relaxed mb-4">
        {movie.description}
      </p>
      <div className="text-center">
        <span className="inline-block bg-white text-gray-900 text-xs font-bold px-4 py-1 rounded-full shadow-md">
          ⭐ {movie.rating}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
