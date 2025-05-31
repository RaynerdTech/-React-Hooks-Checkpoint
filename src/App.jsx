import React, { useState, useRef, useEffect } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovieModal';
import AnimatedBackground from './components/StarBackground';
import MovieDetail from './pages/MovieDetails'; // 👈 Import detail component
import './App.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description:
        'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL:
        'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
      rating: 8.8,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      title: 'Stranger Things',
      description:
        'A group of kids uncover a mystery involving secret experiments and supernatural forces.',
      posterURL:
        'https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg',
      rating: 8.7,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      title: 'Interstellar',
      description:
        'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNmIwM2E3YjMtYWUxYi00M2ZkLWFmMzktZWFiYTU4MGM2YTk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.6,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      title: 'The Matrix',
      description:
        'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      posterURL: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg',
      rating: 8.7,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      title: 'Dune (2021)',
      description:
        'A noble family becomes embroiled in a war for control over the galaxy’s most valuable asset.',
      posterURL:
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/250px-Dune_%282021_film%29.jpg',
      rating: 8.2,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
  ]);

  const [filters, setFilters] = useState({ title: '', rating: 0 });
  const movieListRef = useRef(null);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      movie.rating >= filters.rating
  );

  useEffect(() => {
    if (filters.title || filters.rating > 0) {
      movieListRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [filteredMovies]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-7xl">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 animate-pulse drop-shadow-lg">
                  🎬 My Movie Universe
                </h1>
                <Filter filters={filters} setFilters={setFilters} />
                <AddMovie addMovie={addMovie} />
                <div ref={movieListRef}>
                  <MovieList movies={filteredMovies} />
                </div>
              </>
            }
          />
          {/* Detail Route */}
          <Route
            path="/movie/:title"
            element={<MovieDetail movies={movies} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
