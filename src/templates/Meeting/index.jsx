import './Meeting.css';
import { Spotlight, Stack } from '../../components';
import { frontEnd } from '../../service/mockStackDB';
import { meeting } from '../../service/mockSpotlightDB';

function Meeting() {
  return (
    <div className="meeting" data-testid="meeting">
      <div className="meeting-main">
        <Spotlight
          title={ meeting.title }
          className={ meeting.className }
        >
          { meeting.children }
        </Spotlight>
        <Stack icons={ frontEnd } content="social" />
      </div>
    </div>
  );
}

export default Meeting;
