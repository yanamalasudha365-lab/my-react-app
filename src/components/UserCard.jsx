 import React from 'react';

export default function UserCard({ user }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{user.name}</h3>
        <span className="badge">{user.role}</span>
      </div>
      <hr className="divider" />
      <div className="card-body">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>City:</strong> {user.city}</p>
      </div>
    </div>
  );
}