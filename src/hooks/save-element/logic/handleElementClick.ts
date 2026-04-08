import { savedElement } from '../../../features/logicSlice';
import type { AppDispatch } from '../../../store/store.ts';
import type { SelectedElement } from '../../../types/global-state-types/GlobalTypes.ts';

function handleElementClick(
  e: MouseEvent,
  dispatch: AppDispatch
): SelectedElement {
  e.preventDefault();
  e.stopPropagation();

  if (
    !(e.target instanceof HTMLElement) ||
    e.target.closest('[id="acext-panel-container-ss"]')
  )
    return null;

  const target: HTMLElement = e.target;
  dispatch(savedElement(target));

  return e.target;
}

export default handleElementClick;
