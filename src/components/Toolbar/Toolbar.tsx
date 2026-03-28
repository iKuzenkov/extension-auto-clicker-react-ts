import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../features/themeSlice.ts';
import useDrag from './utils/drag-n-drop/useDrag.ts';
import { useThemeStorage } from '../../storage/useThemeStorage.ts';
import Button from '../ReusableComponents/Button/Button.tsx';
import type { Props } from './Types.ts';
import type { Theme } from '../../global-types/ThemeTypes.ts';
import type { AppDispatch, RootState } from '../../store/store.ts';
import './Toolbar.scss';

function Toolbar(props: Props) {
  const { panelRef } = props;
  const dragHandleRef = useRef<HTMLButtonElement>(null);

  const state: Theme = useSelector(
    (state: RootState): Theme => state.theme.theme
  );
  const dispatch = useDispatch<AppDispatch>();

  useDrag({ panelRef, dragHandleRef });
  useThemeStorage({ state });

  const onThemeClick = (): void => {
    dispatch(toggleTheme(state === 'light' ? 'dark' : 'light'));
  };
  const onToggleClick = (): void => {};

  return (
    <>
      <div id="acext-toolbar-container-ss" className={`acext-${state}-ss`}>
        <Button title="⇕⇕⇕" ref={dragHandleRef} />
        <Button
          onClick={onThemeClick}
          title={state === 'light' ? '🌙' : '☀️'}
        />
        <Button onClick={onToggleClick} title="👁" />
      </div>
    </>
  );
}

export default Toolbar;
