import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import handleElementClick from './logic/handleElementClick.ts';
import type { AppDispatch } from '../../store/store.ts';
import type { SelectedElement } from '../../types/global-state-types/GlobalTypes.ts';

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
    startSelecting: (): void => setIsSelecting(true),
  };
}

export default useSaveElement;
