import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme, toggleHideShow } from '../features/uiSlice';
import type { AppDispatch } from '../store/store';
import type { Theme, HideShow } from '../types/global-state-types/GlobalTypes';

type Props = {
  theme: Theme;
  isVisible: HideShow;
};

const useUIStorage = (props: Props): void => {
  const { theme, isVisible } = props;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem('acext-theme-ss');
    const savedHideShow: string | null =
      localStorage.getItem('acext-hide-show-ss');

    if (savedTheme === 'light' || savedTheme === 'dark') {
      dispatch(toggleTheme(savedTheme));
    }

    if (savedHideShow !== null) {
      dispatch(toggleHideShow(savedHideShow === 'true'));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('acext-theme-ss', theme);
    localStorage.setItem('acext-hide-show-ss', String(isVisible));
  }, [theme, isVisible]);
};

export default useUIStorage;
