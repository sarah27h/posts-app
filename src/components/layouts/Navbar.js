import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/">Dev Posts</Link>
      <Link to="/">Home</Link>
      <Link to="/create">New post</Link>
    </div>
  );
}
