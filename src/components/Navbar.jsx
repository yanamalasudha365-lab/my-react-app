import React from 'react';

export default function Navbar({ isLoggedIn, onToggleAuth }) {
  return (
    <header className="navbar">
      <h2>Team Portal</h2>
      <button 
        onClick={onToggleAuth} 
        className={`btn ${isLoggedIn ? 'btn-danger' : 'btn-primary'}`}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </header>
  );
}