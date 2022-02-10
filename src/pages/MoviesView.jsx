import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import * as movieApi from '../services/apiService';
import SearchBar from '../components/SearchBar/SearchBar.js';
import MoviesList from '../components/MoviesList/MoviesList';
import OnGoBackButton from '../components/ButtonBack/ButtonBack.js';

export default function MoviesView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedFilms, setSearchedFilms] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const search = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    movieApi
      .searchMovies(searchQuery)
      .then(data => data.results)
      .then(setSearchedFilms);
  }, [searchQuery]);

  useEffect(() => {
    if (search === null) {
      return;
    }
    movieApi
      .searchMovies(search)
      .then(data => data.results)
      .then(setSearchedFilms);
  }, [search]);

  const handleFormSubmit = input => {
    setSearchQuery(searchedFilms);
    navigate({ ...location, search: `query=${input}` });
  };

  return (
    <>
      <OnGoBackButton location={location} />
      <SearchBar onSubmit={handleFormSubmit} />
      {searchedFilms && <MoviesList movies={searchedFilms} />}
    </>
  );
}
