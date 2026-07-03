import { useSelector } from 'react-redux';
import { useRef } from 'react';
import useSetPanelPosition from '../../../storage/panel-position/useSetPanelPosition';
import Toolbar from '../../../shared/ui/components/Toolbar/Toolbar';
import SelectTargetButton from '../../../shared/ui/components/SelectTargetButton/SelectTargetButton';
import Inputs from '../../../shared/ui/components/Inputs/Inputs';
import ButtonStart from '../../../shared/ui/components/ButtonStart/ButtonStart';
import ButtonStop from '../../../shared/ui/components/ButtonStop/ButtonStop';
import ButtonReset from '../../../shared/ui/components/ButtonReset/ButtonReset';
import ClickCount from '../../../shared/ui/components/ClickCount/ClickCount';
import CountDown from '../../../shared/ui/components/CountDown/CountDown';
import HelperStatus from '../../../shared/ui/components/HelperStatus/HelperStatus';
import Info from '../../../shared/ui/components/Info/Info';
import type { RootState } from '../../../store/store';
import type {
  HideShow,
  Theme,
} from '../../../shared/types/global-state-types/GlobalTypes';
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
        tabIndex={0}
        aria-label="Autoclicker extension"
        ref={panelRef}
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
