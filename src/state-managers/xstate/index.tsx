import React from 'react';
import {ApplicationContextProvider, useApplicationContext} from './store';
import {Counter} from '../../common/Counter';
import {Control} from '../../common/Control';

const Controls = () => {
  const {increment, decrement} = useApplicationContext();
  return <Control increment={() => {for(let i: number = 0; i<5000;i++){increment()};console.time('start')}} decrement={decrement} />;
};

const Display = () => {
    console.timeEnd('start')
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
