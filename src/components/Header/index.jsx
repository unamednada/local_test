import React from 'react';
import Nav from './Nav';
import './header.css';

export default function Header({ title }) {
  return (
    <div className="header">
      <div className="header-content-left">
        <h1>{title}</h1>
      </div>
      <div className="header-content-right">
        <Nav />
      </div>
    </div>
  );
}
