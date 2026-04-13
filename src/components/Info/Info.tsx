import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../../store/store';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import './Info.scss';

function Info() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  return (
    <>
      <div id="acext-info-ss" className={`acext-${theme}-ss`}>
        <div className="acext-more-info-container-ss">
          <Link to="more-info" className="acext-link-to-source-ss">
            <button
              type="button"
              className={`acext-more-info-btn-ss acext-${theme}-ss`}
            >
              more info
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Info;
