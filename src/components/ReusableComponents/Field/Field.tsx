import { type ChangeEvent } from 'react';
import type {
  Time,
  KeysFromTime,
} from '../../../types/global-state-types/GlobalTypes';
import { useDispatch, useSelector } from 'react-redux';
import { inputsState } from '../../../features/logicSlice';
import type { AppDispatch, RootState } from '../../../store/store';
import './Field.scss';

type Props = {
  name: KeysFromTime;
  value: string;
  placeholder: string;
};

function Field(props: Props) {
  const { name, value, placeholder } = props;
  const time: Time = useSelector(
    (state: RootState): Time => state.logic.entryInput
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <input
        type="text"
        className="acext-input-ss"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value: string = e.target.value;
          if (!/^\d*$/.test(value)) return;

          dispatch(inputsState({ ...time, [name]: value }));
        }}
        placeholder={placeholder}
      />
    </>
  );
}

export default Field;
