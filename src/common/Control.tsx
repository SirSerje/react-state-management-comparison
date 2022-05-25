import React, {FC, PropsWithChildren} from 'react';
import './Control.scss';

interface Props {
  increment?: () => void | void;
  decrement?: () => void | void;
}

export const Control: FC<PropsWithChildren<Props>> = ({increment, decrement}) => {
  return (
    <>
      {typeof increment === 'function' && (
        <button
          onClick={() => {
            increment();
          }}
        >
          +
        </button>
      )}
      {typeof decrement === 'function' && <button onClick={() => decrement()}>-</button>}
    </>
  );
};
