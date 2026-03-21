import type { Props } from './Types.ts';
import './InfoUse.scss';

function InfoUse(props: Props) {
  const { info } = props;
  return (
    <>
      <div id="acext-info-use-ss">
        <ol className="acext-info-use-ol-ss">
          {info.map(({ id, text }: { id: number; text: string }) => (
            <li key={id} className="acext-list-of-li-ss">
              {text}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default InfoUse;
