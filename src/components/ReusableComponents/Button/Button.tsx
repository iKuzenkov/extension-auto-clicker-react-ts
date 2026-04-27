import { type ForwardedRef, forwardRef, memo } from 'react';
import type { Props } from './Types';
import './Button.scss';

function ButtonInner(
  { onClick, text, 'aria-label': ariaLabel, title, cursor, theme }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <>
      <button
        type="button"
        title={title}
        aria-label={ariaLabel}
        className={`acext-button-ss acext-${theme}-ss`}
        onClick={onClick}
        ref={ref}
        style={{ cursor: cursor }}
      >
        {text}
      </button>
    </>
  );
}

const Button = memo(forwardRef(ButtonInner));

export default Button;
