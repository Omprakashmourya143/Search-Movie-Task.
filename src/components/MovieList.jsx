import React from 'react';

const MovieList = ({ movies, addFavorite }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg px-4 py-6">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{movie.Title}</h2>
              <p className="text-sm text-gray-700">Year: {movie.Year}</p>
              <button
                onClick={() => addFavorite(movie)}
                className="mt-2 mb-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
              >
                Add to Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
