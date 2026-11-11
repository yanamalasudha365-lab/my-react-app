 
import React, { useState } from "react";
import "../styles/CounterApp.css";

function CounterApp() {

  // Counter state
  const [count, setCount] = useState(0);

  // Theme state
  const [darkMode, setDarkMode] = useState(false);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  // Theme toggle function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "counter-container dark" : "counter-container light"}>

      <div className="counter-card">

        <h1>Counter Application</h1>

        <p className="theme-text">
          Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}
        </p>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>

        <h2>Counter Value</h2>

        <div className="count-display">{count}</div>

        <div className="counter-buttons">
          <button className="increment-btn" onClick={increment}>
            Increment
          </button>

          <button className="decrement-btn" onClick={decrement}>
            Decrement
          </button>

          <button className="reset-btn" onClick={reset}>
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}

export default CounterApp;
