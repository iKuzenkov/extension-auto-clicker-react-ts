import { useSelector } from 'react-redux';
import type { RootState } from '../../../../store/store';
import type { Props } from './Types';
import type { Theme } from '../../../../types/global-state-types/GlobalTypes';
import './Title.scss';

function Title(props: Props) {
  const { title } = props;

  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  return (
    <>
      <div id="acext-title-ss" className={`acext-${state}-ss`}>
        <span>{title}</span>
      </div>
    </>
  );
}

export default Title;
