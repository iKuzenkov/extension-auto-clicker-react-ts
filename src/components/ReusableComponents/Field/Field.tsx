import { useDispatch, useSelector } from 'react-redux';
import { inputsState } from '../../../features/logicSlice';
import type { AppDispatch, RootState } from '../../../store/store';
import { type ChangeEvent } from 'react';
import type { Time } from '../../../types/global-state-types/GlobalTypes';
import type { Props } from './Types';
import './Field.scss';

function Field(props: Props) {
  const { name, value, 'aria-label': ariaLabel, title, placeholder } = props;
  const time: Time = useSelector(
    (state: RootState): Time => state.logic.entryInput
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <input
        type="text"
        className="acext-input-ss"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value: string = e.target.value;
          if (!/^\d*$/.test(value)) return;

          dispatch(inputsState({ ...time, [name]: value }));
        }}
        name={name}
        value={value}
        aria-label={ariaLabel}
        title={title}
        placeholder={placeholder}
      />
    </>
  );
}

export default Field;
