import { useLocation, Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import PropTypes from 'prop-types';

import PosterImage from '../../images/poster.jpg';
import { ReactComponent as UpArrow } from '../../images/arrow-top.svg';
import {
  FilmList,
  FilmCard,
  FilmItem,
  CardImage,
  FilmInfo,
  FilmTitle,
} from './MovieList.styled';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <FilmList>
      {movies.map(movie => (
        <FilmItem key={movie.id}>
          <FilmCard>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <CardImage
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : PosterImage
                }
                alt={movie.title}
              />
              <FilmInfo>
                <FilmTitle>{movie.title ?? movie.original_title}</FilmTitle>
              </FilmInfo>
            </Link>
          </FilmCard>
        </FilmItem>
      ))}
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
    </FilmList>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
