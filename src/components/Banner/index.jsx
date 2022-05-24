import './Banner.css';

function Banner() {
  return (
    <div
      className="banner"
      data-testid="banner"
    >
      <div className="banner-main">
        <div className="banner-main-left">
          <h1 className="neonText">Welcome, friend</h1>
          <p>
            I&#39;m Gustavo. FullStack Developer
            <em>&</em>
            Systems&#39; Analyst
          </p>
        </div>
        <img src="./images/profile.jpg" alt="profile" />
        <div className="banner-main-right">
          <h2>about me</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
