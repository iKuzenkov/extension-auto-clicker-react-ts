import { useSelector } from 'react-redux';
import { useRef } from 'react';
import Toolbar from '../Toolbar/Toolbar.tsx';
import SelectTargetButton from '../SelectTargetButton/SelectTargetButton.tsx';
import Inputs from '../Inputs/Inputs.tsx';
import ButtonStart from '../ButtonStart/ButtonStart.tsx';
import ButtonStop from '../ButtonStop/ButtonStop.tsx';
import ButtonReset from '../ButtonReset/ButtonReset.tsx';
import CountInfo from '../CountInfo/CountInfo.tsx';
import NextClick from '../NextClick/NextClick.tsx';
import HelperStatus from '../HelperStatus/HelperStatus.tsx';
import Info from '../Info/Info.tsx';
import type { RootState } from '../../store/store.ts';
import type { HideShow } from '../../types/global-state-types/GlobalTypes.ts';
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
