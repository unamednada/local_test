import './Meeting.css';
import { Spotlight, Stack } from '../../components';
import { frontEnd } from '../../service/mockStackDB';

function Meeting() {
  return (
    <div className="meeting" data-testid="meeting">
      <div className="meeting-main">
        <div className="meeting-main-left">
          <Spotlight
            title="Meeting"
            className="meeting-card"
          >
            <div className="meeting-card-content">
              <p>MEETING CARD CONTENT!</p>
            </div>
          </Spotlight>
        </div>
        <div className="meeting-main-right">
          <Stack icons={ frontEnd } content="here I am" />
        </div>
      </div>
    </div>
  );
}

export default Meeting;
