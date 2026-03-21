import type { Props } from './Types.ts';
import './Title.scss';

function Title(props: Props) {
  const { title } = props;
  return (
    <>
      <div id="acext-title-ss">
        <span>{title}</span>
      </div>
    </>
  );
}

export default Title;
