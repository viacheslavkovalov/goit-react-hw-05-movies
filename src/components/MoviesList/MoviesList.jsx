import { useLocation, Link } from 'react-router-dom';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.original_title ?? movie.original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
