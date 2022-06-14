import React from 'react';
import {ApplicationContextProvider, useApplicationContext} from './store';
import {BookView} from '../../common/BookView';
import {Control} from '../../common/Control';

const Controls = () => {
  const {fetchBooks} = useApplicationContext();
  return <Control onFetch={fetchBooks} />;
};

const View = () => {
  const {books} = useApplicationContext();
  return <BookView data={books.data} />;
};

export const XStateComponent = () => (
  <ApplicationContextProvider>
    <div className="example">
      <Controls />
      <div className="break" />
      <View />
    </div>
  </ApplicationContextProvider>
);

XStateComponent.displayName = 'XState';
