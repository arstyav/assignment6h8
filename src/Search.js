import React, { useState } from 'react';

const Search = ({ setQuery }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(input); // Kirim input pengguna ke komponen App
    setInput(''); // Reset input
  };

  return (
    <form onSubmit={handleSearch} style={{ margin: '1rem', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '0.5rem', width: '300px', marginRight: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem', background: '#FF5733', color: '#FFF', border: 'none' }}>
        Search
      </button>
    </form>
  );
};

export default Search;
