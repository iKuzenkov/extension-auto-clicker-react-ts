import { useRef } from 'react';
import { useSelector } from 'react-redux';
import useSetPanelPosition from '../../storage/panel-position/useSetPanelPosition';
import Toolbar from '../../shared/ui/components/Toolbar/Toolbar';
import type { Theme } from '../../shared/types/global-state-types/GlobalTypes';
import type { RootState } from '../../store/store';
import './CookieClicker.scss';

const CookieClicker = () => {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const panelRef = useRef<HTMLDivElement>(null);

  useSetPanelPosition({ panelRef });

  return (
    <>
      <div
        id="acext-panel-cookie-clicker-container-ss"
        className={`acext-${theme}-ss`}
        tabIndex={0}
        aria-label="cookie clicker extension"
        ref={panelRef}
      >
        <div
          id="acext-grid-layout-cookie-clicker-ss"
          className={`acext-${theme}-ss`}
        >
          <Toolbar panelRef={panelRef} />
        </div>
      </div>
    </>
  );
};

export default CookieClicker;
