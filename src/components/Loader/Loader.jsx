import Loader from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export default function LoaderComponent() {
  return (
    <Wrapper>
      <Loader
        type="Bars"
        color="#008891"
        height={60}
        width={60}
        ariaLabel="loading"
      />
    </Wrapper>
  );
}
