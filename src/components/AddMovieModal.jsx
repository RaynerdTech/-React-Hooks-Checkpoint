import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const [fileImage, setFileImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const localImageURL = URL.createObjectURL(file);
      setFileImage(localImageURL);
      setMovie({ ...movie, posterURL: localImageURL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(movie);
    setMovie({ title: '', description: '', posterURL: '', rating: 0 });
    setFileImage(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 mt-12 shadow-2xl backdrop-blur-sm space-y-6 animate-fade-in"
    >
      <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 drop-shadow-md mb-4">
        🎥 Add a New Movie
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Title"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
          className="px-5 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
        <input
          type="url"
          placeholder="Poster URL (optional if uploading)"
          value={movie.posterURL}
          onChange={(e) => {
            setFileImage(null); // clear uploaded file preview
            setMovie({ ...movie, posterURL: e.target.value });
          }}
          className="px-5 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Or upload an image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-300 bg-gray-700 rounded-xl px-5 py-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {movie.posterURL && (
        <div className="mt-4 text-center">
          <img
            src={movie.posterURL}
            alt="Preview"
            className="max-h-64 mx-auto rounded-xl shadow-lg border border-gray-600"
          />
        </div>
      )}

      <textarea
        placeholder="Description"
        value={movie.description}
        onChange={(e) => setMovie({ ...movie, description: e.target.value })}
        className="w-full px-5 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
      <input
        type="number"
        placeholder="Rating (0 - 10)"
        min="0"
        max="10"
        step="0.1"
        value={movie.rating}
        onChange={(e) => setMovie({ ...movie, rating: Number(e.target.value) })}
        className="w-full px-5 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        ➕ Add Movie
      </button>
    </form>
  );
};

export default AddMovie;
