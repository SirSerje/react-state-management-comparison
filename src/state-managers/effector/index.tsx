import React from 'react';
import {useEvent, useStore} from 'effector-react';
import {Control} from '../../common/Control';
import {Counter} from '../../common/Counter';
import {fetchBooks, $books, getDataFx} from './store';
import {BooksState} from '../../common/types';

const Controls = () => {
  const fetchBook = useEvent(fetchBooks);
  return <Control increment={fetchBook} />;
};

const Display = () => {
  const isLoading = useStore<boolean>(getDataFx.pending);
  const books = useStore<BooksState>($books);
  return <Counter data={books.books.data} isLoading={isLoading} />;
};

export const EffectorComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <Display />
  </div>
);

EffectorComponent.displayName = 'Effector';
