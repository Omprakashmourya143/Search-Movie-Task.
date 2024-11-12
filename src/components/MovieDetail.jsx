// src/components/MovieDetail.jsx
import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../services/api'; // Make sure the path is correct

const MovieDetail = ({ id }) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getMovieDetails();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <p>Release Year: {movie.Year}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetail;
