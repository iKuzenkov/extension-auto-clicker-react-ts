import { useSelector } from 'react-redux';
import { useRef } from 'react';
import useSetPanelPosition from '../../storage/panel-position/useSetPanelPosition';
import Toolbar from '../Toolbar/Toolbar';
import SelectTargetButton from '../SelectTargetButton/SelectTargetButton';
import Inputs from '../Inputs/Inputs';
import ButtonStart from '../ButtonStart/ButtonStart';
import ButtonStop from '../ButtonStop/ButtonStop';
import ButtonReset from '../ButtonReset/ButtonReset';
import ClickCount from '../ClickCount/ClickCount';
import CountDown from '../CountDown/CountDown';
import HelperStatus from '../HelperStatus/HelperStatus';
import Info from '../Info/Info';
import type { RootState } from '../../store/store';
import type {
  HideShow,
  Theme,
} from '../../types/global-state-types/GlobalTypes';
import './Main.scss';

function Main() {
  const isVisible: HideShow = useSelector(
    (state: RootState): HideShow => state.ui.isVisible
  );
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const panelRef = useRef<HTMLDivElement>(null);

  useSetPanelPosition({ panelRef });

  return (
    <>
      <div
        id="acext-panel-container-ss"
        className={`acext-${theme}-ss`}
        ref={panelRef}
        tabIndex={0}
        aria-label="Autoclicker extension"
      >
        <div id="acext-grid-layout-ss" className={`acext-${theme}-ss`}>
          <Toolbar panelRef={panelRef} />
          {isVisible && <SelectTargetButton />}
          {isVisible && <Inputs />}
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
}

export default Main;
