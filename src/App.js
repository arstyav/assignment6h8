import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Search from './Search';
import Movie from './Movie';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('avengers'); // Default pencarian

  // Fungsi untuk mengambil data dari API
  const fetchMovies = async (searchQuery) => {
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
    const url = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`;

    try {
      const response = await axios.get(url);
      if (response.data.Search) {
        setMovies(response.data.Search); // Simpan hasil pencarian
      } else {
        setMovies([]); // Kosongkan jika tidak ada hasil
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Ambil data saat aplikasi pertama kali dijalankan
  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  return (
    <div>
      <Header title="Show your favorite movies" />
      <Search setQuery={setQuery} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
