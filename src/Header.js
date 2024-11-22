import React from 'react';

const Header = ({ title }) => {
  return (
    <header style={{ background: '#FF5733', color: '#FFF', padding: '1rem', textAlign: 'center' }}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
