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
        <div className="banner-main-right">
          <img src="./images/profile.jpg" alt="profile" />
          <h2>about me</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
