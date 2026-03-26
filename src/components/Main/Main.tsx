import { useRef } from 'react';
import Toolbar from '../Toolbar/Toolbar.tsx';
import SelectTargetButton from '../SelectTargetButton/SelectTargetButton.tsx';
import Inputs from '../Inputs/Inputs.tsx';
import ControlButtons from '../ControlButtons/ControlButtons.tsx';
import CountInfo from '../CountInfo/CountInfo.tsx';
import Info from '../Info/Info.tsx';
import './Main.scss';

function Main() {
  const panelRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div id="acext-panel-container-ss" ref={panelRef}>
        <div id="acext-grid-layout-ss">
          <Toolbar panelRef={panelRef} />
          <SelectTargetButton />
          <Inputs />
          <ControlButtons />
          <CountInfo />
          <Info />
        </div>
      </div>
    </>
  );
}

export default Main;
