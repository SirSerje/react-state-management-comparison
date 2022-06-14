import React from 'react';
import {useEvent, useStore} from 'effector-react';
import {Control} from '../../common/Control';
import {BookView} from '../../common/BookView';
import {fetchBooks, $books, getDataFx} from './store';
import {BooksState} from '../../common/types';

const Controls = () => {
  console.count('|   Controls Effector');
  const fetchBook = useEvent(fetchBooks);
  return <Control onFetch={fetchBook} />;
};

const View = () => {
  console.count('|   View Effector');
  const isLoading = useStore<boolean>(getDataFx.pending);
  const books = useStore<BooksState>($books);
  return <BookView data={books.books.data} isLoading={isLoading} />;
};

export const EffectorComponent = () => {
  console.count('|--Container Effector');
  return (
    <div className="example">
      <Controls />
      <div className="break" />
      <View />
    </div>
  );
};

EffectorComponent.displayName = 'Effector';
