import { useNavigate } from 'react-router-dom';

export default function OnGoBackButton({ location }) {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/', { replace: true });
  };

  return (
    <button type="button " onClick={onGoBack}>
      Go Back
    </button>
  );
}
