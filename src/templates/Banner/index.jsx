import './Banner.css';
import { frontEnd, backEnd, testing, cloud } from '../../service/mockStackDB';
import { Stack } from '../../components';

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
          <h2>main stack</h2>
          <Stack icons={ frontEnd } content="frontend" />
          <Stack icons={ backEnd } content="backend" />
          <Stack icons={ testing } content="testing" />
          <Stack icons={ cloud } content="cloud" />
        </div>
        <img src="./images/profile.jpg" alt="profile" id="main-profile" />
        <div className="banner-main-right">
          <div className="spotlight about">
            <h2>about me</h2>
            <p>
              A soon to be fullstack developer with a background in systems&#39;. I&#39;m currently studying Systems&#39; Analysis and Development at University. I love coding and my most recent professional experiences have been with the development of web applications.
            </p>
            <hr />
            <p>
              With my experience in systems&#39;, I&#39;ve been able to work with a wide range of technologies, from frontend to backend. I&#39;m also familiar with the use of databases and cloud computing.
            </p>
          </div>
          <div className="spotlight projects">
            <h2>spotlight</h2>
            <a id="spotlight" href="https://pixel-art.unamednada.repl.co/" target="_blank" rel="noreferrer">
              <img src="./images/pixel-art.png" alt="project-preview" />
              <hr />
              <h4>Pixel Art</h4>
              <p>
                Web app developed with HTML, CSS and JS vanilla.
                It&#39;s a sandbox app which allows you to create pixelated art with random colors.
              </p>
            </a>
          </div>
          <div className="spotlight nav">
            <h2>like what you see?</h2>
            <a href="/projects">click here to see more!</a>
            <div id="or">or</div>
            <a href="/contact">here to contact me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
