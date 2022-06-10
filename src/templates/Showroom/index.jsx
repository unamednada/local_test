import { useEffect, useState } from 'react';
import './Showroom.css';
import { Spotlight } from '../../components';
import getProjects from '../../service/projectsDB';
import { loading } from '../../service/mockSpotlightDB';

function Showroom() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const FIVE_SECONDS = 5000;

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .then(() => setTimeout(() => setIsLoading(false), FIVE_SECONDS));
  });

  return (
    <div className="showroom" data-testid="showroom">
      <div className="showroom-main">
        { isLoading && <Spotlight title={ loading.title } className={ loading.className }>{ loading.children }</Spotlight> }
        { !isLoading && projects.map((project, index) => (
          <Spotlight
            title={ project.title }
            className={ project.className }
            key={ index }
          >
            { project.children }
          </Spotlight>
        )) }
      </div>
    </div>
  );
}

export default Showroom;
