import React, {FC, PropsWithChildren, useMemo} from 'react';
import './Counter.scss';
import {Book} from './types';

interface Props {
  count?: number;
  data?: Book[];
  isLoading?: boolean;
}

export const Counter: FC<PropsWithChildren<Props>> = ({count, data, isLoading}) => {
  const renderList = useMemo(
    () =>
      data?.map((i) => (
        <div className="book-view" key={i.id}>
          {i.id}
          <div className="book-content">{i.content}</div>
        </div>
      )),
    [data],
  );
  return (
    <>
      {isLoading && (
        <>
          <h5>...loading</h5>
          <div className="break" />
        </>
      )}
      <div className="book-container">{renderList}</div>
    </>
  );
};
