import PropTypes from 'prop-types';
import errorImage from '../../images/errorImage.jpg';
import { Div, P } from './NotFound.styled';

export default function NotFound({ texterror }) {
  return (
    <Div role="error">
      <P text={texterror}>{texterror}</P>
      <img src={errorImage} width="500" alt="error" />
    </Div>
  );
}
NotFound.propTypes = {
  texterror: PropTypes.string.isRequired,
};
