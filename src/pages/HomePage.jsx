import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/api';
import MovieList from '../components/MovieList';
import Favorites from '../components/Favorites';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const handleSearch = async (query) => {
    const results = await fetchMovies(query);
    setMovies(results);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Pagination Logic
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search movies..." 
        onChange={(e) => handleSearch(e.target.value)} 
      />
      <MovieList movies={currentMovies} addFavorite={addFavorite} />
      <Pagination 
        totalMovies={movies.length} 
        moviesPerPage={moviesPerPage} 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
      />
      <Favorites favorites={favorites} removeFavorite={(id) => setFavorites(favorites.filter(fav => fav.imdbID !== id))} />
    </div>
  );
};

export default HomePage;
