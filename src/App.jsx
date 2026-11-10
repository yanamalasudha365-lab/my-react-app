 import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import { usersData } from './data/usersData';
import './App.css';

export default function App() {
  // Boolean state for conditional rendering
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className="app-container">
      <Navbar isLoggedIn={isLoggedIn} onToggleAuth={toggleAuth} />

      <main className="main-content">
        {/* Conditional rendering using Ternary Operator */}
        {isLoggedIn ? (
          <HomeComponent users={usersData} />
        ) : (
          <LoginComponent onLogin={toggleAuth} />
        )}
      </main>
    </div>
  );
}