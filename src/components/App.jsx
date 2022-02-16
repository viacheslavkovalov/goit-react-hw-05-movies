import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppBar from './AppBar/AppBar';
import LoaderComponent from 'components/Loader/Loader';

const HomeView = lazy(() => import('../pages/HomeView'));
const MoviesView = lazy(() => import('../pages/MoviesView'));
const MovieDatailsView = lazy(() => import('../pages/MovieDetailsView'));
const NotFoundView = lazy(() => import('../pages/NotFoundView'));

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <AppBar></AppBar>
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="/movies" element={<MoviesView></MoviesView>}></Route>
          <Route
            path="/movies/*"
            element={<NotFoundView></NotFoundView>}
          ></Route>
          <Route path="/movies/:movieId" element={<MovieDatailsView />}>
            <Route path="/movies/:movieId/cast" element={<Cast></Cast>}></Route>
            <Route
              path="/movies/:movieId/reviews"
              element={<Reviews></Reviews>}
            ></Route>
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2000} position="top-right" />
    </>
  );
};
