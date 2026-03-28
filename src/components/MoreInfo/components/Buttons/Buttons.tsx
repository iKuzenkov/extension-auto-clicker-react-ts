import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { Theme } from '../../../../types/global-state-types/ThemeTypes.ts';
import type { RootState } from '../../../../store/store.ts';
import './Buttons.scss';

function Buttons() {
  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  return (
    <>
      <div id="acext-buttons-ss">
        <div className="acext-info-wrap-ss">
          <Link to=".." className="acext-link-to-source-ss">
            <button
              type="button"
              className={`acext-info-btn-ss acext-${state}-ss`}
            >
              ⬅
            </button>
          </Link>
        </div>
        <div className="acext-info-wrap-ss">
          <a
            href="https://browser-extensions-hub.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="acext-link-to-source-ss"
          >
            <button
              type="button"
              className={`acext-info-btn-ss acext-${state}-ss`}
            >
              🌐
            </button>
          </a>
        </div>
        <div className="acext-info-wrap-ss">
          <a
            href="https://browser-extensions-hub.vercel.app/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="acext-link-to-source-ss"
          >
            <button
              type="button"
              className={`acext-info-btn-ss acext-${state}-ss`}
            >
              ✉️
            </button>
          </a>
        </div>
        <div className="acext-info-wrap-ss">
          <a
            href="https://browser-extensions-hub.vercel.app/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="acext-link-to-source-ss"
          >
            <button
              type="button"
              className={`acext-info-btn-ss acext-${state}-ss`}
            >
              ☕
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Buttons;
