import { Link } from 'react-router-dom';
import './Info.scss';

function Info() {
  return (
    <>
      <div id="acext-info-ss">
        <div className="acext-more-info-container-ss">
          <Link to="more-info" className="acext-link-to-source-ss">
            <button type="button" className="acext-more-info-btn-ss">
              more info
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Info;
