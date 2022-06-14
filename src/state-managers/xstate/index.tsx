import React from 'react';
import {ApplicationContextProvider, useApplicationContext} from './store';
import {BookView} from '../../common/BookView';
import {Control} from '../../common/Control';

const Controls = () => {
  console.count('|   Control XState');
  const {fetchBooks} = useApplicationContext();
  return <Control onFetch={fetchBooks} />;
};

const View = () => {
  console.count('|   View XState');
  const {books, isLoading} = useApplicationContext();
  return <BookView data={books.data} isLoading={isLoading} />;
};

export const XStateComponent = () => {
  console.count('|--Container XState');
  return (
    <ApplicationContextProvider>
      <div className="example">
        <Controls />
        <div className="break" />
        <View />
      </div>
    </ApplicationContextProvider>
  );
};

XStateComponent.displayName = 'XState';
