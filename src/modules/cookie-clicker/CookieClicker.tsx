import { useRef } from 'react';
import { useSelector } from 'react-redux';
import useSetPanelPosition from '../../storage/panel-position/useSetPanelPosition';
import Toolbar from '../../shared/ui/components/Toolbar/Toolbar';
import SelectTargetButton from '../../shared/ui/components/SelectTargetButton/SelectTargetButton';
import Field from './components/Field/Field';
import ButtonStart from '../../shared/ui/components/ButtonStart/ButtonStart';
import ButtonStop from '../../shared/ui/components/ButtonStop/ButtonStop';
import ButtonReset from '../../shared/ui/components/ButtonReset/ButtonReset';
import ClickCount from '../../shared/ui/components/ClickCount/ClickCount';
import CountDown from '../../shared/ui/components/CountDown/CountDown';
import HelperStatus from '../../shared/ui/components/HelperStatus/HelperStatus';
import Info from '../../shared/ui/components/Info/Info';
import type {
  HideShow,
  Theme,
} from '../../shared/types/global-state-types/GlobalTypes';
import type { RootState } from '../../store/store';
import './CookieClicker.scss';

const CookieClicker = () => {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const isVisible: HideShow = useSelector(
    (state: RootState): HideShow => state.ui.isVisible
  );
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
          {isVisible && <SelectTargetButton />}
          {isVisible && <Field />}
          {isVisible && <ButtonStart />}
          {isVisible && <ButtonStop />}
          {isVisible && <ButtonReset />}
          {isVisible && <ClickCount />}
          {isVisible && <CountDown />}
          {isVisible && <HelperStatus />}
          {isVisible && <Info />}
        </div>
      </div>
    </>
  );
};

export default CookieClicker;
