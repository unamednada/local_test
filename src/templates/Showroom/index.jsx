import { useEffect, useState } from 'react';
import './Showroom.css';
import { Spotlight } from '../../components';
import getProjects from '../../service/projectsDB';

function Showroom() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  });

  return projects && (
    <div className="showroom" data-testid="showroom">
      <div className="showroom-main">
        { projects.map((project, index) => (
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
