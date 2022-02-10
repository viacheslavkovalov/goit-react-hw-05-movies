import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import { ToastContainer } from 'react-toastify';
import AppBar from './AppBar/AppBar';

import HomeView from '../pages/HomeView';
import MoviesView from '../pages/MoviesView';
import MovieDatailsView from '../pages/MovieDetailsView';
import NotFoundView from '../pages/NotFoundView';

import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Container>
      <AppBar></AppBar>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/movies" element={<MoviesView></MoviesView>}></Route>
        <Route path="/movies/:movieId" element={<MovieDatailsView />} />
        {/* <Route path="/cast" element={<Cast></Cast>}></Route> */}
        {/* <Route path="/reviews " element={<Reviews></Reviews>}></Route>
        </Route> */}
        <Route path="*" element={<NotFoundView></NotFoundView>}></Route>
      </Routes>
      <ToastContainer autoClose={2000} position="top-right" />
    </Container>
  );
};
