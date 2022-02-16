import { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import * as movieApi from '../services/apiService';
import LoaderComponent from 'components/Loader/Loader';

const SearchBar = lazy(() => import('../components/SearchBar/SearchBar'));
const MovieContainer = lazy(() =>
  import('../components/Container/MovieContainer.js')
);
const MoviesList = lazy(() => import('../components/MoviesList/MoviesList'));
const OnGoBackButton = lazy(() =>
  import('../components/ButtonBack/ButtonBack.js')
);

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
    <Suspense fallback={<LoaderComponent />}>
      {searchedFilms && (
        <SearchBar onSubmit={handleFormSubmit}>
          <OnGoBackButton style={{ zIndex: '100' }} location={location} />
        </SearchBar>
      )}
      <MovieContainer>
        {searchedFilms && <MoviesList movies={searchedFilms} />}
      </MovieContainer>
    </Suspense>
  );
}
