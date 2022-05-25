import { Link } from 'react-router-dom';
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
          <Link to="/" id="home-link">home</Link>
          <Link to="/projects" id="projects-link">projects</Link>
          <Link to="/contact" id="contact-link">contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
