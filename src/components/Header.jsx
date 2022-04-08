import React from 'react';

function Header() {
  return (
    <header data-testid='header'>
      <div className='header-left'>
        <a
          href='https://github.com/unamednada/unamednada.github.io'
          target='_blank'
        >
          see source code here
        </a>
      </div>
      <div className='header-right'></div>
    </header>
  )
}

export default Header;
