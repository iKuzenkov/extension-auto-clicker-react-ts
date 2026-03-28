import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store.ts';
import { toggleTheme } from '../features/themeSlice.ts';

type Theme = 'light' | 'dark';

type Props = {
  state: Theme;
};

export const useThemeStorage = (props: Props): void => {
  const { state } = props;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem('theme');

    if (savedTheme === 'light' || savedTheme === 'dark') {
      dispatch(toggleTheme(savedTheme));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('theme', state);
  }, [state]);
};
