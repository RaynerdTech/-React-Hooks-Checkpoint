import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 px-2 sm:px-4 md:px-6 xl:px-8 animate-fade-in">
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      ) : (
        <p className="col-span-full text-center text-lg text-gray-400 font-semibold mt-10 animate-pulse">
          🎥 No movies found. Try adding one or adjust the filters.
        </p>
      )}
    </div>
  );
};

export default MovieList;
