import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { statusMessage } from '../../features/uiSlice';
import handleElementClick from './logic/handleElementClick';
import type { AppDispatch } from '../../store/store';
import type { SelectedElement } from '../../types/global-state-types/GlobalTypes';

function useSaveElement() {
  const [isSelecting, setIsSelecting] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!isSelecting) return;

    const saveElement = (e: MouseEvent): void => {
      const result: SelectedElement = handleElementClick(e, dispatch);

      if (result) {
        setIsSelecting(false);
      }
    };

    document.addEventListener('click', saveElement, true);

    return (): void => {
      document.removeEventListener('click', saveElement, true);
    };
  }, [dispatch, isSelecting]);

  return {
    startSelecting: (): void => {
      setIsSelecting(true);
      dispatch(statusMessage('expecting a target'));
    },
  };
}

export default useSaveElement;
