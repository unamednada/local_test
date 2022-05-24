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
          <h2>my stack</h2>
          <div className="banner-stack-icons">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <img src="./images/profile.jpg" alt="profile" id="main-profile" />
        <div className="banner-main-right">
          <h2>about me</h2>
          <p>
            A soon to be fullstack developer with a background in systems&#39;. I&#39;m currently studying Systems&#39; Analysis and Development at University. I love coding and my most recent professional experiences have been with the development of web applications.
          </p>
          <hr />
          <p>
            With my experience in systems&#39;, I&#39;ve been able to work with a wide range of technologies, from frontend to backend. I&#39;m also familiar with the use of databases and cloud computing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
