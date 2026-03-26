import { useRef } from 'react';
import Button from '../ReusableComponents/Button/Button.tsx';
import useDrag from './utils/drag-n-drop/useDrag.ts';
import type { Props } from './Types.ts';
import './Toolbar.scss';

function Toolbar(props: Props) {
  const { panelRef } = props;
  const dragHandleRef = useRef<HTMLButtonElement>(null);

  useDrag({ panelRef, dragHandleRef });
  const onThemeClick = (): void => {};
  const onToggleClick = (): void => {};

  return (
    <>
      <div id="acext-toolbar-container-ss">
        <Button title="⇕⇕⇕" ref={dragHandleRef} />
        <Button onClick={onThemeClick} title="Theme" />
        <Button onClick={onToggleClick} title="👁" />
      </div>
    </>
  );
}

export default Toolbar;
