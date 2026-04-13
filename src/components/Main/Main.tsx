import { useSelector } from 'react-redux';
import { useRef } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SelectTargetButton from '../SelectTargetButton/SelectTargetButton';
import Inputs from '../Inputs/Inputs';
import ButtonStart from '../ButtonStart/ButtonStart';
import ButtonStop from '../ButtonStop/ButtonStop';
import ButtonReset from '../ButtonReset/ButtonReset';
import CountInfo from '../CountInfo/CountInfo';
import NextClick from '../NextClick/NextClick';
import HelperStatus from '../HelperStatus/HelperStatus';
import Info from '../Info/Info';
import type { RootState } from '../../store/store';
import type { HideShow } from '../../types/global-state-types/GlobalTypes';
import './Main.scss';

function Main() {
  const isVisible: HideShow = useSelector(
    (state: RootState): HideShow => state.ui.isVisible
  );
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div id="acext-panel-container-ss" ref={panelRef}>
        <div id="acext-grid-layout-ss">
          <Toolbar panelRef={panelRef} />
          {isVisible && <SelectTargetButton />}
          {isVisible && <Inputs />}
          {isVisible && <ButtonStart />}
          {isVisible && <ButtonStop />}
          {isVisible && <ButtonReset />}
          {isVisible && <CountInfo />}
          {isVisible && <NextClick />}
          {isVisible && <HelperStatus />}
          {isVisible && <Info />}
        </div>
      </div>
    </>
  );
}

export default Main;
