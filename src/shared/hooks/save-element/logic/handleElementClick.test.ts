import handleElementClick from './handleElementClick';
import type { SelectedElement } from '../../../types/global-state-types/GlobalTypes';

describe('handleElementClick()', () => {
  it('should be return element', () => {
    const dispatch = jest.fn();
    const button: HTMLButtonElement = document.createElement('button');
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: button });

    const selectedElement: SelectedElement = handleElementClick(
      event,
      dispatch
    );

    expect(selectedElement).toBeInstanceOf(HTMLButtonElement);
    expect(dispatch).toHaveBeenCalled();
  });
});
