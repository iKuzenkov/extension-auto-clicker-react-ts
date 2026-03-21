import Button from '../ReusableComponents/Button/Button.tsx';
// import type { Void } from './Types.ts';
import './Toolbar.scss';

const onDragAndDropClick = () => {};
const onThemeClick = () => {};
const onToggleClick = () => {};

function Toolbar() {
  return (
    <>
      <div id="acext-toolbar-container-ss">
        <Button onClick={onDragAndDropClick} title="⇕⇕⇕" />
        <Button onClick={onThemeClick} title="Theme" />
        <Button onClick={onToggleClick} title="👁" />
      </div>
    </>
  );
}

export default Toolbar;
