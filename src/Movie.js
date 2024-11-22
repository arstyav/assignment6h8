import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '200px' }}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <h3 style={{ fontSize: '1rem', marginTop: '0.5rem', textAlign: 'center' }}>{movie.Title}</h3>
    </div>
  );
};

export default Movie;
