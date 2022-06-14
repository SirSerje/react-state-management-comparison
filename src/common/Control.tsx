import React, {FC, PropsWithChildren} from 'react';
import './Control.scss';

interface Props {
  onFetch?: () => void | void;
}

export const Control: FC<PropsWithChildren<Props>> = ({onFetch}) => {
  return (
    <>
      {typeof onFetch === 'function' && (
        <button
          onClick={() => {
            onFetch();
          }}
        >
          Fetch!
        </button>
      )}
    </>
  );
};
