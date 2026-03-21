import type { Props } from './Types.ts';
import './Button.scss';

function Button({ onClick, title }: Props) {
  return (
    <>
      <button type="button" className="acext-button-ss" onClick={onClick}>
        {title}
      </button>
    </>
  );
}

export default Button;
