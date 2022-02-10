import PosterImage from '../../images/poster.jpg';
export default function MovieCard({ movie }) {
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
    <div key={id}>
      {poster_path ? (
        <img src={IMG_URL} alt="poster" />
      ) : (
        <img src={PosterImage} alt="poster" width="300" />
      )}
      <p>
        {title ?? original_title} ({releaseDate})
      </p>
      <p>User score: {vote_average}</p>
      <p>Overview</p>
      <p>{overview}</p>
      <p>Genres</p>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}
