import React, {FC, PropsWithChildren, useMemo} from 'react';
import './Counter.scss';
import {Book} from './types';

interface Props {
  count?: number;
  data?: Book[];
  isLoading?: boolean;
}

export const BookView: FC<PropsWithChildren<Props>> = ({count, data, isLoading}) => {
  const renderList = useMemo(
    () =>
      data?.map((i) => (
        <div className="book-view" key={i.id}>
          {i.author}
          <div className="book-content">{i.content}</div>
        </div>
      )),
    [data],
  );

  return (
    <div className="book-container">
      {isLoading ? (
        <div className="book-view">
          Loading
          <div className="book-content">...</div>
        </div>
      ) : (
        <>{renderList}</>
      )}
    </div>
  );
};
