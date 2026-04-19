import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import type { Theme, HideShow } from '../types/global-state-types/GlobalTypes';
import { toggleTheme, toggleHideShow } from '../features/uiSlice';

type Props = {
  theme: Theme;
  isVisible: HideShow;
};

const useUIStorage = (props: Props): void => {
  const { theme, isVisible } = props;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem('theme');
    const savedHideShow: string | null = localStorage.getItem('hide-show');

    if (savedTheme === 'light' || savedTheme === 'dark') {
      dispatch(toggleTheme(savedTheme));
    }

    if (savedHideShow !== null) {
      dispatch(toggleHideShow(savedHideShow === 'true'));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('hide-show', String(isVisible));
  }, [theme, isVisible]);
};

export default useUIStorage;
