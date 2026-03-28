import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store.ts';
import type { Theme } from '../../../types/global-state-types/ThemeTypes.ts';
import type { Props } from './Types.ts';
import './Button.scss';

function Button({ onClick, title, ref }: Props) {
  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);

  return (
    <>
      <button
        type="button"
        className={`acext-button-ss acext-${state}-ss`}
        onClick={onClick}
        ref={ref}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
