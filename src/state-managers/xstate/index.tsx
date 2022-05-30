import React from 'react';
import {ApplicationContextProvider, useApplicationContext} from './store';
import {Counter} from '../../common/Counter';
import {Control} from '../../common/Control';

const Controls = () => {
  const {fetchBooks} = useApplicationContext();
  return <Control increment={fetchBooks} />;
};

const Display = () => {
  const {books} = useApplicationContext();
  return <Counter data={books.data} />;
};

export const XStateComponent = () => (
  <ApplicationContextProvider>
    <div className="example">
      <Controls />
      <div className="break" />
      <Display />
    </div>
  </ApplicationContextProvider>
);

XStateComponent.displayName = 'XState';
