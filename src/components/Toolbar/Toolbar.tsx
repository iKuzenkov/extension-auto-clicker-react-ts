import { useCallback, useRef } from 'react';
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
  const isDrag: boolean = useSelector(
    (state: RootState): boolean => state.logic.isDrag
  );

  const dispatch = useDispatch<AppDispatch>();

  useDrag({ panelRef, dragHandleRef });
  useUIStorage({ theme, isVisible });

  const onThemeClick = useCallback((): void => {
    dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'));
  }, [dispatch, theme]);

  const onHideShowClick = useCallback((): void => {
    dispatch(toggleHideShow(!isVisible));
  }, [dispatch, isVisible]);

  return (
    <>
      <div id="acext-toolbar-container-ss" className={`acext-${theme}-ss`}>
        <Button
          text="⇕⇕⇕"
          title="move"
          aria-label="drag the panel to any place on the page"
          cursor={isDrag ? 'grabbing' : 'grab'}
          theme={theme}
          ref={dragHandleRef}
        />
        <Button
          text={theme === 'light' ? '🌙' : '☀️'}
          title={theme === 'light' ? 'on dark' : 'on light'}
          aria-label={`switch the topic on ${theme === 'light' ? 'the dark' : 'the light'}`}
          cursor="pointer"
          theme={theme}
          onClick={onThemeClick}
        />
        <Button
          text="👁"
          title={isVisible ? 'hide' : 'show'}
          aria-label={`you can ${isVisible ? 'hide the panel' : 'show the panel'}`}
          cursor="pointer"
          theme={theme}
          onClick={onHideShowClick}
        />
      </div>
    </>
  );
}

export default Toolbar;
