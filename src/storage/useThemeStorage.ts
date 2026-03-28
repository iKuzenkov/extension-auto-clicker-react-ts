import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store.ts';
import type {
  Theme,
  HideShow,
} from '../types/global-state-types/uiSliceTypes.ts';
import { toggleTheme, toggleHideShow } from '../features/uiSlice.ts';

type Props = {
  stateTheme: Theme;
  stateHideShow: HideShow;
};

export const useStorage = (props: Props): void => {
  const { stateTheme, stateHideShow } = props;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem('theme');
    const stateHideShow: string | null = localStorage.getItem('hide-show');

    if (savedTheme === 'light' || savedTheme === 'dark') {
      dispatch(toggleTheme(savedTheme));
    }

    if (stateHideShow === 'hide' || stateHideShow === 'show') {
      dispatch(toggleHideShow(stateHideShow));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('theme', stateTheme);
    localStorage.setItem('hide-show', stateHideShow);
  }, [stateTheme, stateHideShow]);
};
