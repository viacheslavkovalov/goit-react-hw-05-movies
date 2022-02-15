import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieApi from '../../services/apiService';
import {
  Title,
  ReviewsList,
  ReviewItem,
  ItemAuthor,
  ItemContent,
} from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieApi.fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      <Title>Reviews</Title>
      <ReviewsList>
        {reviews.length !== 0 ? (
          reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <ItemAuthor>Author: {author}</ItemAuthor>
              <br />
              <ItemContent>{content}</ItemContent>
            </ReviewItem>
          ))
        ) : (
          <p>We haven't had any reviews yet</p>
        )}
      </ReviewsList>
    </>
  );
}
