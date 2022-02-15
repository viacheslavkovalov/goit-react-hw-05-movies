import { useState, useEffect, Suspense, lazy } from 'react';
import styled from 'styled-components';
import * as movieApi from '../services/apiService';
import Container from 'components/Container/Container';
import LoaderComponent from 'components/Loader/Loader';

const MoviesList = lazy(() => import('../components/MoviesList/MoviesList'));

const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  color: #406882;
  text-align: center;
  line-height: 1.167;
  margin-top: 30px;
  margin-bottom: 50px;
  text-transform: uppercase;
`;

export default function HomeView() {
  const [films, setFilms] = useState(null);
  useEffect(() => {
    movieApi
      .fetchTrendingMovies()
      .then(data => data.results)
      .then(setFilms);
  }, []);

  return (
    <Container>
      <Suspense fallback={<LoaderComponent />}>
        <Title>Trending today {new Date().toLocaleDateString()} </Title>
        {films && <MoviesList movies={films}></MoviesList>}
      </Suspense>
    </Container>
  );
}
