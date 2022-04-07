import React from 'react';

export default function Header({ title }) {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-content-inner">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
