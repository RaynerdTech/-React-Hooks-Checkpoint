import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.title === title);

  if (!movie) return <p className="text-center mt-20 text-xl">🎬 Movie not found.</p>;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 overflow-hidden">
      {/* Transparent Indigo Overlay */}
      <div className="absolute inset-0 bg-indigo-700 opacity-30 pointer-events-none mix-blend-multiply"></div>

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-indigo-400 transition z-10"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 mt-10 lg:mt-20 items-center z-10">
        {/* Movie Poster */}
        <div className="w-full lg:w-1/3 rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-300">
          <img
            src={movie.posterURL}
            alt={movie.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-indigo-400 drop-shadow-lg">
            {movie.title}
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
            {movie.description}
          </p>
          <p className="text-yellow-400 text-lg font-semibold flex items-center gap-2">
            <span>⭐</span> {movie.rating} / 10
          </p>

          {/* Trailer */}
          <div className="aspect-w-16 aspect-h-9 mt-4 rounded-lg overflow-hidden shadow-2xl ring-2 ring-indigo-400">
            <iframe
              src={movie.trailer}
              title="Trailer"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
