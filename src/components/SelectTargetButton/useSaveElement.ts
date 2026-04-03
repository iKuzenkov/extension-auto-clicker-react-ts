import { useEffect, useState } from 'react';

function useSaveElement() {
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    if (!isSelecting) return;

    const saveElement = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const target = e.target as HTMLElement;
      setSelectedElement(target);
      setIsSelecting(false);
    };

    document.addEventListener('click', saveElement, true);

    return () => {
      document.removeEventListener('click', saveElement, true);
    };
  }, [isSelecting]);

  return {
    startSelecting: () => setIsSelecting(true),
    selectedElement,
  };
}

export default useSaveElement;
