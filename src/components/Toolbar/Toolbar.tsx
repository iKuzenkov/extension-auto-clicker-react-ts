import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, toggleHideShow } from '../../features/uiSlice';
import useDrag from '../../hooks/drag-n-drop/useDrag';
import useUIStorage from '../../storage/useUIStorage';
import Button from '../ReusableComponents/Button/Button';
import type { Props } from './Types';
import type {
  Theme,
  HideShow,
} from '../../types/global-state-types/GlobalTypes';
import type { AppDispatch, RootState } from '../../store/store';
import './Toolbar.scss';

function Toolbar(props: Props) {
  const { panelRef } = props;
  const dragHandleRef = useRef<HTMLButtonElement>(null);

  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const isVisible: HideShow = useSelector(
    (state: RootState): HideShow => state.ui.isVisible
  );

  const dispatch = useDispatch<AppDispatch>();

  useDrag({ panelRef, dragHandleRef });
  useUIStorage({ theme, isVisible });

  const onThemeClick = (): void => {
    dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'));
  };
  const onHideShowClick = (): void => {
    dispatch(toggleHideShow(isVisible === true ? false : true));
  };

  return (
    <>
      <div id="acext-toolbar-container-ss" className={`acext-${theme}-ss`}>
        <Button title="⇕⇕⇕" ref={dragHandleRef} />
        <Button
          onClick={onThemeClick}
          title={theme === 'light' ? '🌙' : '☀️'}
        />
        <Button onClick={onHideShowClick} title="👁" />
      </div>
    </>
  );
}

export default Toolbar;
