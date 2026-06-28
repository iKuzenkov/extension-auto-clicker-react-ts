import { useSelector } from 'react-redux';
import Input from '../../../../shared/ui/Input/Input';
import type { Theme } from '../../../../shared/types/global-state-types/GlobalTypes';
import type { RootState } from '../../../../store/store';
import './Field.scss';

function Inputs() {
  const theme: Theme = useSelector((state: RootState): Theme => state.ui.theme);
  const quantity: string = useSelector(
    (state: RootState): string => state.cookie.quantity
  );

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
            placeholder="quantity"
          />
        </div>
      </div>
    </>
  );
}

export default Inputs;
