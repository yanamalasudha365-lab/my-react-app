import React from 'react';

export default function LoginComponent({ onLogin }) {
  return (
    <div className="login-card">
      <h2>Sign In</h2>
      <p className="login-subtitle">
        Please log in to view the team directory.
      </p>
      <button onClick={onLogin} className="btn btn-primary btn-full">
        Log In to Dashboard
      </button>
    </div>
  );
}