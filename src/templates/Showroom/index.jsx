import './Showroom.css';
import { Spotlight } from '../../components';
import { projects } from '../../service/mockSpotlightDB';

function Showroom() {
  return (
    <div className="showroom" data-testid="showroom">
      <div className="showroom-main">
        <div className="showroom-main-left">
          <Spotlight
            title={ projects.title }
            className={ projects.className }
          >
            { projects.children }
          </Spotlight>
        </div>
      </div>
    </div>
  );
}

export default Showroom;
