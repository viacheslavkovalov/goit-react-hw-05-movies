import { toast } from 'react-toastify';
import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchQuery}
          autoComplete="off"
          type="text"
          onChange={handleQueryChange}
          placeholder="Search movies"
        />
        <button type="submit">Искать</button>
      </form>
    </div>
  );
}
