import React from 'react';
import {ApplicationContextProvider, useApplicationContext} from './store';
import {Counter} from '../../common/Counter';
import {Control} from '../../common/Control';

const Controls = () => {
  const {increment, decrement} = useApplicationContext();
  return <Control increment={increment} decrement={decrement} />;
};

const Display = () => {
  const {counter} = useApplicationContext();
  return <Counter count={counter} />;
};

export const xStateComponent = () => (
  <ApplicationContextProvider>
    <div className="example">
      <Controls />
      <div className="break" />
      <Display />
    </div>
  </ApplicationContextProvider>
);

xStateComponent.displayName = 'XState';
