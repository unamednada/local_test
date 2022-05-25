import { Header, Footer } from '../../components';
import './Projects.css';

function Projects() {
  return (
    <div className="Projects" data-testid="projects">
      <Header />
      <div className="Projects__content">
        PROJECTS
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
