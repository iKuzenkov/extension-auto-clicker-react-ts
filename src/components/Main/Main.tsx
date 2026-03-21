import Toolbar from '../Toolbar/Toolbar.tsx';
import SelectTargetButton from '../SelectTargetButton/SelectTargetButton.tsx';
import Inputs from '../Inputs/Inputs.tsx';
import ControlButtons from '../ControlButtons/ControlButtons.tsx';
import CountInfo from '../CountInfo/CountInfo.tsx';
import Info from '../Info/Info.tsx';
import './Main.scss';

function Main() {
  return (
    <>
      <div id="acext-panel-container-ss">
        <div id="grid-layout">
          <Toolbar />
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
