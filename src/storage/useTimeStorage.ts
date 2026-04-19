import { useEffect } from 'react';

type Props = {
  hour: string;
  minute: string;
  second: string;
};

function useTimeStorage(time: Props): void {
  useEffect(() => {
    localStorage.setItem('time', JSON.stringify(time));
  }, [time]);
}

export default useTimeStorage;
