import { type ForwardedRef, forwardRef, memo } from 'react';
import type { Props } from './Types';
import './Button.scss';

function ButtonInner(
  { text, onClick, 'aria-label': ariaLabel, title, theme, cursor }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        title={title}
        className={`acext-button-ss acext-${theme}-ss`}
        style={{ cursor: cursor }}
        ref={ref}
      >
        {text}
      </button>
    </>
  );
}

const Button = memo(forwardRef(ButtonInner));

export default Button;
