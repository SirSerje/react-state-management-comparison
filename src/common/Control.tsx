import React, {FC, PropsWithChildren} from 'react';
import './Control.scss';

interface Props {
  increment: () => void | void;
  decrement: () => void | void;
}

export const Control: FC<PropsWithChildren<Props>> = ({increment, decrement}) => {
  return (
    <>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <button onClick={() => decrement()}>-</button>
    </>
  );
};
