import { useSelector } from 'react-redux';
import type { Props } from './Types.ts';
import type { Theme } from '../../../../types/global-state-types/ThemeTypes.ts';
import type { RootState } from '../../../../store/store.ts';
import './InfoUse.scss';

function InfoUse(props: Props) {
  const { info } = props;

  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  return (
    <>
      <div id="acext-info-use-ss" className={`acext-${state}-ss`}>
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
