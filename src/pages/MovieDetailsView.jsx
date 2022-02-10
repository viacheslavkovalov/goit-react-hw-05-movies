import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import * as movieApi from '../services/apiService.js';
import MovieCard from '../components/MovieCard/MovieCard';
import OnGoBackButton from '../components/ButtonBack/ButtonBack.js';

export default function MovieDetailsView() {
  const [film, setFilm] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    movieApi.fetchMovieDetails(movieId).then(data => setFilm(data));
  }, [movieId]);

  return (
    <>
      <OnGoBackButton location={location} />
      {film && <MovieCard movie={film}></MovieCard>}
      <Outlet></Outlet>
    </>
  );
}
