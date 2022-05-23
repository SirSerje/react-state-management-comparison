import React, {FC, PropsWithChildren} from 'react';
import './Counter.scss';
interface Props {
  count: number;
}

export const Counter: FC<PropsWithChildren<Props>> = ({count}) => {
  return <span className="counter">{count}</span>;
};
