import { type ForwardedRef, forwardRef, memo } from 'react';
import type { Props } from './Types';
import './Button.scss';

function ButtonInner(
  { onClick, title, theme }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <>
      <button
        type="button"
        className={`acext-button-ss acext-${theme}-ss`}
        onClick={onClick}
        ref={ref}
      >
        {title}
      </button>
    </>
  );
}

const Button = memo(forwardRef(ButtonInner));

export default Button;
