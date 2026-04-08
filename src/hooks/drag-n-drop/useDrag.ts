import { useEffect } from 'react';
import type { Props } from './Types.ts';

function useDrag(props: Props): void {
  const { panelRef, dragHandleRef } = props;

  useEffect(() => {
    const wrapper = panelRef.current;
    const handle = dragHandleRef.current;

    if (!wrapper || !handle) return;

    let isDragging: boolean = false;
    let offsetX: number = 0;
    let offsetY: number = 0;

    const onMouseDown = (e: MouseEvent): void => {
      isDragging = true;

      offsetX = e.clientX - wrapper.offsetLeft;
      offsetY = e.clientY - wrapper.offsetTop;

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent): void => {
      if (!isDragging) return;

      const rect: DOMRect = wrapper.getBoundingClientRect();

      let newLeft: number = e.clientX - offsetX;
      let newTop: number = e.clientY - offsetY;

      newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - rect.width));
      newTop = Math.max(0, Math.min(newTop, window.innerHeight - rect.height));

      wrapper.style.left = `${newLeft}px`;
      wrapper.style.top = `${newTop}px`;
    };

    const onMouseUp = (): void => {
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    handle.addEventListener('mousedown', onMouseDown);

    return (): void => {
      handle.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [panelRef, dragHandleRef]);
}

export default useDrag;
