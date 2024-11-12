// src/services/api.js
const API_KEY = 'b48b07c1'; // Replace with your actual API key
const BASE_URL = 'http://www.omdbapi.com/';

// Function to fetch movies based on a search term
export const fetchMovies = async (searchTerm) => {
  const response = await fetch(`${BASE_URL}?s=${encodeURIComponent(searchTerm)}&apikey=${API_KEY}`);
  const data = await response.json();

  if (data.Response === 'False') {
    throw new Error(data.Error);
  }

  return data.Search; // Returns the list of movies
};

// Function to fetch a movie by IMDb ID
export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  const data = await response.json();

  if (data.Response === 'False') {
    throw new Error(data.Error);
  }

  return data; // Returns the detailed movie information
};
