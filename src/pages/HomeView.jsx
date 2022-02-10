import * as movieApi from '../services/apiService';
import MoviesList from '../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

export default function HomeView() {
  const [films, setFilms] = useState(null);
  useEffect(() => {
    movieApi
      .fetchTrendingMovies()
      .then(data => data.results)
      .then(setFilms);
  }, []);

  return (
    <>
      <h1>Trending today </h1>
      {films && <MoviesList movies={films}></MoviesList>}
    </>
  );
}
