import { useSelector } from 'react-redux';
import type { Props } from './Types.ts';
import type { Theme } from '../../../../global-types/ThemeTypes.ts';
import type { RootState } from '../../../../store/store.ts';
import './Title.scss';

function Title(props: Props) {
  const { title } = props;

  const state: Theme = useSelector(
    (state: RootState): Theme => state.theme.theme
  );
  return (
    <>
      <div id="acext-title-ss" className={`acext-${state}-ss`}>
        <span>{title}</span>
      </div>
    </>
  );
}

export default Title;
