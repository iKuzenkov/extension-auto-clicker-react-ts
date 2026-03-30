import { useSelector } from 'react-redux';
import { useRef } from 'react';
import Toolbar from '../Toolbar/Toolbar.tsx';
import SelectTargetButton from '../SelectTargetButton/SelectTargetButton.tsx';
import Inputs from '../Inputs/Inputs.tsx';
import ControlButtons from '../ControlButtons/ControlButtons.tsx';
import CountInfo from '../CountInfo/CountInfo.tsx';
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
          {isVisible && <ControlButtons />}
          {isVisible && <CountInfo />}
          {isVisible && <Info />}
        </div>
      </div>
    </>
  );
}

export default Main;
