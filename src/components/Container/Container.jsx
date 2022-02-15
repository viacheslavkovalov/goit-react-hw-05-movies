import PropTypes from 'prop-types';
import { StyledContainer, StyledMovieContainer } from './Container.styled';

export function MovieContainer({ children }) {
  return <StyledMovieContainer>{children}</StyledMovieContainer>;
}

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
MovieContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
