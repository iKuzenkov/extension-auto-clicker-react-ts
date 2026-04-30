import { type RefObject, useLayoutEffect } from 'react';

type Props = {
  panelRef: RefObject<HTMLDivElement | null>;
};

function useSetPanelPosition(props: Props) {
  const { panelRef } = props;

  useLayoutEffect(() => {
    const wrapper = panelRef.current;
    if (!wrapper) return;

    const saved: string | null = localStorage.getItem(
      'acext-panel-position-ss'
    );

    if (saved) {
      const { left, top } = JSON.parse(saved);

      wrapper.style.left = `${left}px`;
      wrapper.style.top = `${top}px`;
    }
  }, [panelRef]);
}

export default useSetPanelPosition;
