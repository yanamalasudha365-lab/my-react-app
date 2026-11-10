import React from 'react';
import UserCard from './UserCard';

export default function HomeComponent({ users }) {
  return (
    <div className="home-container">
      <div className="welcome-banner">
        <h1>Welcome Back! 👋</h1>
        <p>Here is your current team overview:</p>
      </div>

      {/* List Rendering using map() */}
      <div className="grid-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}