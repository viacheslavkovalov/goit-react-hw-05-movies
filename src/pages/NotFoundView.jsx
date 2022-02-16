import { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LoaderComponent from 'components/Loader/Loader';
import errorImage from '../images/errorImage.jpg';
const OnGoBackButton = lazy(() =>
  import('../components/ButtonBack/ButtonBack')
);

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
  const location = useLocation();
  return (
    <Suspense fallback={<LoaderComponent />}>
      <OnGoBackButton location={location} />
      <Div role="error">
        <img src={errorImage} width="500" alt="error" />
      </Div>
    </Suspense>
  );
}
