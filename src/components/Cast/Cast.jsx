import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieApi from '../../services/apiService';
import {
  Title,
  CastList,
  CastItem,
  HeroCard,
  HeroImage,
  HeroInfo,
  HeroDesc,
} from './Cast.styled';
import ImageNotFound from '../../images/placeholder.png';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieApi.fetchMovieCredits(movieId).then(results => setCast(results.cast));
  }, [movieId]);

  return (
    <>
      <Title>Cast</Title>
      <CastList>
        {cast.length !== 0 ? (
          cast.map(({ id, profile_path, name, character, original_name }) => (
            <CastItem key={id}>
              <HeroCard>
                <HeroImage
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : ImageNotFound
                  }
                  alt={{ name }}
                />
                <HeroInfo>
                  <HeroDesc>Character: {character}</HeroDesc>
                  <HeroDesc>{name ?? original_name}</HeroDesc>
                </HeroInfo>
              </HeroCard>
            </CastItem>
          ))
        ) : (
          <p>We have no information about it</p>
        )}
      </CastList>
    </>
  );
}
