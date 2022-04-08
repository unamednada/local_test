import React from 'react';

export default function Header({ title }) {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-content-left">
          <h1>{title}</h1>
        </div>
        <div className="header-content-right">
          <nav>
            <ul>
              <li><a>home</a></li>
              <li><a>projects</a></li>
              <li><a>about</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
