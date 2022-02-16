import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import * as movieApi from '../services/apiService.js';
import LoaderComponent from 'components/Loader/Loader';
import { MovieContainer } from '../components/Container/Container';
import { ReactComponent as UpArrow } from '../images/arrow-top.svg';

const NotFoundView = lazy(() => import('./NotFoundView'));
const ScrollToTop = lazy(() => import('react-scroll-to-top'));
const MovieCard = lazy(() => import('../components/MovieCard/MovieCard'));
const OnGoBackButton = lazy(() =>
  import('../components/ButtonBack/ButtonBack')
);

export default function MovieDetailsView() {
  const [film, setFilm] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    movieApi.fetchMovieDetails(movieId).then(results => setFilm(results));
  }, [movieId]);

  return (
    <MovieContainer>
      <Suspense fallback={<LoaderComponent />}>
        {film && (
          <>
            <OnGoBackButton location={location} />
            <MovieCard movie={film}></MovieCard>
          </>
        )}
        <Outlet></Outlet>
        <ScrollToTop
          smooth
          top={40}
          style={{
            boxShadow: 'none',
            backgroundColor: 'transparent',
            right: '60px',
            bottom: '60px',
          }}
          component={<UpArrow width={60} height={60} />}
        />
        {film === null && <NotFoundView></NotFoundView>}
      </Suspense>
    </MovieContainer>
  );
}
