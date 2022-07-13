import './Banner.css';
import { useEffect, useState } from 'react';
import { Stack, Spotlight } from '../../components';
import { aboutMe, loading, nav } from '../../service/mockSpotlightDB';
import { frontEnd, backEnd, testing, cloud } from '../../service/mockStackDB';
import getProjects from '../../service/projectsDB';

function Banner() {
  const [spotLight, setSpotLight] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const THREE_SECONDS = 3000;

  useEffect(() => {
    getProjects()
      .then((data) => {
        const { title, className, children } = data[data.length - 1];

        const paragraph = children[0].props.children[2].props.children;
        delete children[0].props.children[3];
        children[0].props.children[1] = <h4>{title}</h4>;
        children[0].props.children[2] = <p>{paragraph}</p>;

        const spotlight = {
          className,
          children,
        };

        setSpotLight(spotlight);
      })
      .then(() => setTimeout(() => setIsLoading(false), THREE_SECONDS));
  }, []);

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
            title={ isLoading ? loading.title : 'Spotlight' }
            className={ isLoading ? loading.className : spotLight.className }
          >
            { isLoading ? loading.children : spotLight.children }
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
