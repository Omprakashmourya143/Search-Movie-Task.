// src/pages/MovieDetailPage.js
import React from 'react';
import MovieDetail from '../components/MovieDetail';

const MovieDetailPage = ({ match }) => {
  return <MovieDetail match={match} />;
};

export default MovieDetailPage;
