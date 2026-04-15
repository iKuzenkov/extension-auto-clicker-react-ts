import * as React from 'react';
import { type ChangeEvent } from 'react';
import type {
  Time,
  KeysFromTime,
} from '../../../types/global-state-types/GlobalTypes';
import './Field.scss';

type Props = {
  name: KeysFromTime;
  value: string;
  setTime: React.Dispatch<React.SetStateAction<Time>>;
  placeholder: string;
};

function Field(props: Props) {
  const { name, value, setTime, placeholder } = props;
  return (
    <>
      <input
        type="text"
        className="acext-input-ss"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setTime((prevState: Time) => ({
            ...prevState,
            [name]: e.target.value,
          }));
        }}
        placeholder={placeholder}
      />
    </>
  );
}

export default Field;
