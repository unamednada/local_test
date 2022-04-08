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
          <a href="/">home</a>
          <a href="/projects">projects</a>
          <a href="/about">about</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
