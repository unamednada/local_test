import { Header, Footer } from '../../components';
import { Showroom } from '../../templates';
import './Projects.css';

function Projects() {
  return (
    <div className="Projects" data-testid="projects">
      <Header />
      <Showroom />
      <Footer />
    </div>
  );
}

export default Projects;
