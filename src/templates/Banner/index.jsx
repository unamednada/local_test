import './Banner.css';
import { frontEnd, backEnd, testing, cloud } from '../../service/mockStackDB';
import { Stack, Spotlight } from '../../components';
import { aboutMe, projects, nav } from '../../service/mockSpotlightDB';

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
          <Spotlight
            title={ aboutMe.title }
            className={ aboutMe.className }
          >
            { aboutMe.children }
          </Spotlight>
          <Spotlight
            title={ projects.title }
            className={ projects.className }
          >
            { projects.children }
          </Spotlight>
          <Spotlight
            title={ nav.title }
            className={ nav.className }
          >
            { nav.children }
          </Spotlight>
        </div>
      </div>
    </div>
  );
}

export default Banner;
