import styled from 'styled-components';
import errorImage from '../images/errorImage.jpg';

// Styles
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
// Styles

export default function NotFoundView() {
  return (
    <Div role="error">
      <img src={errorImage} width="500" alt="error" />
    </Div>
  );
}
