import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BackButton, LeftArrow } from './ButtonBack.styled';

export default function OnGoBackButton({ location }) {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/', { replace: true });
  };

  return (
    <BackButton type="button " onClick={onGoBack}>
      <LeftArrow />
    </BackButton>
  );
}

OnGoBackButton.propTypes = {
  location: PropTypes.object,
};
