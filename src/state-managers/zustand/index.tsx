import {useApplicationState} from './store';
import React from 'react';
import {Control} from '../../common/Control';
import {Counter} from '../../common/Counter';

const Controls = () => {
  const {increment, decrement} = useApplicationState();
  return <Control increment={() => {for(let i: number = 0; i<5000;i++){increment()};console.time('start')}} decrement={decrement} />;
};

const Display = () => {
    console.timeEnd('start')
  const {counter} = useApplicationState();
  return <Counter count={counter} />;
};

export const ZustandComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <Display />
  </div>
);

ZustandComponent.displayName = 'Zustand';
