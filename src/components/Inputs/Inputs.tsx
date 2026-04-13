import { useSelector } from 'react-redux';
import Field from '../ReusableComponents/Field/Field';
import type { RootState } from '../../store/store';
import type { Theme } from '../../types/global-state-types/GlobalTypes';
import './Inputs.scss';

function Inputs() {
  const state: Theme = useSelector((state: RootState): Theme => state.ui.theme);

  return (
    <>
      <div id="acext-inputs-container-ss" className={`acext-${state}-ss`}>
        <div className="acext-timer-inputs-ss">
          <Field placeholder="h" />
          <Field placeholder="m" />
          <Field placeholder="s" />
        </div>
      </div>
    </>
  );
}

export default Inputs;
