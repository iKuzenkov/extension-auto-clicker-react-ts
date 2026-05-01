import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import handleElementClick from './logic/handleElementClick';
import { statusMessage } from '../../features/uiSlice';
import type { AppDispatch } from '../../store/store';
import type { SelectedElement } from '../../types/global-state-types/GlobalTypes';

function useSaveElement() {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
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
    startSelecting: useCallback((): void => {
      setIsSelecting(true);
      dispatch(statusMessage('expecting a target'));
    }, [dispatch]),
  };
}

export default useSaveElement;
