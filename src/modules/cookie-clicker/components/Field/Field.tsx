import { useSelector } from 'react-redux';
import useCookieLogic from '../../../../shared/hooks/cookie-logic/useCookieLogic';
import Input from '../../../../shared/ui/Fields/Fields';
import Inputs from '../../../../shared/ui/components/Inputs/Inputs';
import type {
  Delay,
  Theme,
} from '../../../../shared/types/global-state-types/GlobalTypes';
import type { RootState } from '../../../../store/store';
import './Field.scss';
import useTimerLogic from '../../../../shared/hooks/timer-logic/useTimerLogic';

function Field() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const quantity: string = useSelector(
    (state: RootState): string => state.cookie.quantity
  );

  const delayForMultiClicks: Delay = useCookieLogic(quantity);

  useTimerLogic(delayForMultiClicks);

  return (
    <>
      <div
        id="acext-field-cookie-clicker-container-ss"
        className={`acext-${theme}-ss`}
      >
        <div className="acext-cookie-clicker-input-ss">
          <Input
            name="quantity"
            value={quantity}
            aria-label="enter the number of clicks"
            title="number of clicks"
            placeholder="number of clicks"
          />
        </div>
      </div>
      <Inputs />
    </>
  );
}

export default Field;
