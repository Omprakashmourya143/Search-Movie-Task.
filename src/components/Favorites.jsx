import React from 'react';

const Favorites = ({ favorites, removeFavorite }) => {
  if (favorites.length === 0) {
    return <div className="text-center text-gray-500">No favorites added yet.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {favorites.map((movie) => (
        <div key={movie.imdbID} className="border rounded-lg overflow-hidden shadow-lg">
          <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-lg font-bold">{movie.Title}</h2>
            <p className="text-sm text-gray-700">Year: {movie.Year}</p>
            <button
              onClick={() => removeFavorite(movie.imdbID)} 
              className="mt-2 text-red-600 hover:underline"
            >
              Remove from Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
