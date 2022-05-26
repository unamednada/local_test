import './Showroom.css';
import { Spotlight } from '../../components';
import projects from '../../service/mockProjectsDB';

function Showroom() {
  return (
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
