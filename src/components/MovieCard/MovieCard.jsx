import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import PosterImage from '../../images/poster.jpg';
import {
  MovieCardWrapper,
  MovieImage,
  MovieInfo,
  MovieItem,
  MovieTitle,
  MovieSubTitle,
  MovieGenreItem,
} from './MovieCard.styled';
export default function MovieCard({ movie }) {
  const location = useLocation();
  const {
    id,
    title,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
    poster_path,
  } = movie;
  const IMG_URL = `https://image.tmdb.org/t/p/w300/${poster_path}`;
  const releaseDate = release_date.slice(0, 4);

  return (
    <>
      <MovieCardWrapper key={id}>
        {poster_path ? (
          <MovieImage src={IMG_URL} alt={title} />
        ) : (
          <MovieImage src={PosterImage} alt={title} />
        )}
        <MovieInfo>
          <MovieTitle>
            {title ?? original_title} ({releaseDate})
          </MovieTitle>
          <MovieItem>User score:{vote_average * 10}%</MovieItem>
          <MovieSubTitle>Overview</MovieSubTitle>
          <MovieItem>{overview}</MovieItem>
          <MovieSubTitle>Genres</MovieSubTitle>
          <ul style={{ display: 'flex' }}>
            {genres.map(genre => (
              <MovieGenreItem
                style={{ marginRight: '10px', fontSize: '18px' }}
                key={genre.id}
              >
                {genre.name}
              </MovieGenreItem>
            ))}
          </ul>
        </MovieInfo>
      </MovieCardWrapper>
      <div style={{ padding: '0px 30px 30px 30px' }}>
        <MovieTitle>Additional information</MovieTitle>
        <MovieSubTitle>
          <NavLink to={`/movies/${movie.id}/cast`} state={location.state}>
            Cast
          </NavLink>
        </MovieSubTitle>
        <MovieSubTitle>
          <NavLink to={`/movies/${movie.id}/reviews`} state={location.state}>
            Reviews
          </NavLink>
        </MovieSubTitle>
      </div>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
