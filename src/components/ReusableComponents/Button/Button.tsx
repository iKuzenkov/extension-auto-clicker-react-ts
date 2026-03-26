import type { Props } from './Types.ts';
import './Button.scss';

function Button({ onClick, title, ref }: Props) {
  return (
    <>
      <button
        type="button"
        className="acext-button-ss"
        onClick={onClick}
        ref={ref}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
