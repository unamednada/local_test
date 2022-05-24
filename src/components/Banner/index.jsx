import './Banner.css';

function Banner() {
  return (
    <div
      className="banner"
      data-testid="banner"
    >
      <div className="banner-main">
        <div className="banner-main-left">
          <h1 className="title neonText">Welcome, friend</h1>
        </div>
        <img src="./images/profile.jpg" alt="profile" />
        <div className="banner-main-right">
          <h2>about me</h2>
          <p>FullStack developer, System&#39;s Analyst, crazy about tech and education.</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
