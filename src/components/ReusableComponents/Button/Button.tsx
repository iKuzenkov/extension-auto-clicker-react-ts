import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store.ts';
import type { Theme } from '../../../global-types/ThemeTypes.ts';
import type { Props } from './Types.ts';
import './Button.scss';

function Button({ onClick, title, ref }: Props) {
  const state: Theme = useSelector(
    (state: RootState): Theme => state.theme.theme
  );

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
