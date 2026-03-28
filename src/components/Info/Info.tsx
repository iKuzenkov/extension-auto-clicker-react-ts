import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { Theme } from '../../global-types/ThemeTypes.ts';
import type { RootState } from '../../store/store.ts';
import './Info.scss';

function Info() {
  const state: Theme = useSelector(
    (state: RootState): Theme => state.theme.theme
  );
  return (
    <>
      <div id="acext-info-ss" className={`acext-${state}-ss`}>
        <div className="acext-more-info-container-ss">
          <Link to="more-info" className="acext-link-to-source-ss">
            <button
              type="button"
              className={`acext-more-info-btn-ss acext-${state}-ss`}
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
