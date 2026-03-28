import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../../store/store.ts';
import type { Theme } from '../../types/global-state-types/ThemeTypes.ts';
import type { HideShow } from '../../types/global-state-types/uiSliceTypes.ts';
import './Info.scss';

function Info() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const hideShow: HideShow = useSelector(
    (state: RootState): HideShow => state.ui.hideShow
  );
  return (
    <>
      <div
        id="acext-info-ss"
        className={`acext-${theme}-ss acext-${hideShow}-ss`}
      >
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
