import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDrag from '../../hooks/drag-n-drop/useDrag';
import useUIStorage from '../../storage/useUIStorage';
import { toggleTheme, toggleHideShow } from '../../features/uiSlice';
import Button from '../ReusableComponents/Button/Button';
import type { AppDispatch, RootState } from '../../store/store';
import type { Props } from './Types';
import type {
  Theme,
  HideShow,
} from '../../types/global-state-types/GlobalTypes';
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
          aria-label="drag the panel to any place on the page"
          title="move"
          theme={theme}
          cursor={isDrag ? 'grabbing' : 'grab'}
          ref={dragHandleRef}
        />
        <Button
          text={theme === 'light' ? '🌙' : '☀️'}
          onClick={onThemeClick}
          aria-label={`switch the topic on ${theme === 'light' ? 'the dark' : 'the light'}`}
          title={theme === 'light' ? 'on dark' : 'on light'}
          theme={theme}
          cursor="pointer"
        />
        <Button
          text="👁"
          onClick={onHideShowClick}
          aria-label={`you can ${isVisible ? 'hide the panel' : 'show the panel'}`}
          title={isVisible ? 'hide' : 'show'}
          theme={theme}
          cursor="pointer"
        />
      </div>
    </>
  );
}

export default Toolbar;
