import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city" 
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
