import './Header.css';

function Header() {
  return (
    <header data-testid="header">
      <div className="header-left">
        <a
          href="https://github.com/unamednada/unamednada.github.io"
          target="_blank"
          rel="noreferrer"
        >
          see source code here
        </a>
      </div>
      <div className="header-right">
        <nav className="header-nav">
          <a href="/" id="home-link">home</a>
          <a href="/projects" id="projects-link">projects</a>
          <a href="/contact">contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
