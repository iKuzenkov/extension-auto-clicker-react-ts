import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store.ts';
import { savedElement } from '../../features/logicSlice.ts';

function useSaveElement() {
  const [isSelecting, setIsSelecting] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!isSelecting) return;

    const saveElement = (e: MouseEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      if (
        !(e.target instanceof HTMLElement) ||
        e.target.closest('[id="acext-panel-container-ss"]')
      )
        return;
      const target: HTMLElement = e.target;
      dispatch(savedElement(target));
      setIsSelecting(false);
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
