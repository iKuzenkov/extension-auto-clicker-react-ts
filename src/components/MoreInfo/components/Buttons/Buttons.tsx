import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../../../../store/store';
import type { Theme } from '../../../../types/global-state-types/GlobalTypes';
import './Buttons.scss';

function Buttons() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  return (
    <>
      <div id="acext-buttons-ss" className={`acext-${theme}-ss`}>
        <div className="acext-info-wrap-ss" tabIndex={-1}>
          <Link to=".." className="acext-link-to-source-ss" tabIndex={-1}>
            <button
              type="button"
              className={`acext-info-btn-ss acext-${theme}-ss`}
              aria-label="back"
              title="Back"
            >
              ⬅
            </button>
          </Link>
        </div>
        <div className="acext-info-wrap-ss" tabIndex={-1}>
          <a
            href="https://browser-extensions-hub.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="acext-link-to-source-ss"
            tabIndex={-1}
          >
            <button
              type="button"
              className={`acext-info-btn-ss acext-${theme}-ss`}
              aria-label="open website"
              title="Website"
            >
              🌐
            </button>
          </a>
        </div>
        <div className="acext-info-wrap-ss" tabIndex={-1}>
          <a
            href="https://browser-extensions-hub.vercel.app/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="acext-link-to-source-ss"
            tabIndex={-1}
          >
            <button
              type="button"
              className={`acext-info-btn-ss acext-${theme}-ss`}
              aria-label="open сontact"
              title="Contact"
            >
              ✉️
            </button>
          </a>
        </div>
        <div className="acext-info-wrap-ss" tabIndex={-1}>
          <a
            href="https://browser-extensions-hub.vercel.app/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="acext-link-to-source-ss"
            tabIndex={-1}
          >
            <button
              type="button"
              className={`acext-info-btn-ss acext-${theme}-ss`}
              aria-label="donate"
              title="Coffee"
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
