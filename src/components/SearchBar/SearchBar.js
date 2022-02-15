import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { BiCameraMovie } from 'react-icons/bi';
import {
  StyledSearchbar,
  StyledForm,
  StyledFormButton,
  StyledFormButtonLabel,
  StyledFormInput,
} from './SearchBar.styled.jsx';

export default function SearchBar({ onSubmit, children }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Please enter desired movie title');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <StyledSearchbar>
      {children}
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormButton type="submit">
          <StyledFormButtonLabel>
            <BiCameraMovie
              style={{ width: 40, height: 40, fill: 'rgb(0, 136, 145)' }}
            />
          </StyledFormButtonLabel>
        </StyledFormButton>
        <StyledFormInput
          value={searchQuery}
          autoComplete="off"
          type="text"
          onChange={handleQueryChange}
          placeholder="Search movies"
        />
      </StyledForm>
    </StyledSearchbar>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.element,
};
