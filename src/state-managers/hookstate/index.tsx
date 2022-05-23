import React from 'react';
import {counter, useDecrement, useIncrement} from './store';
import {useState} from '@hookstate/core';
import {Control} from '../../common/Control';
import {Counter} from '../../common/Counter';

const Controls = () => {
  const {increment} = useIncrement();
  const {decrement} = useDecrement();
  return <Control increment={increment} decrement={decrement} />;
};

const Display = () => {
  const counterState = useState(counter);
  const label = `current: ${counterState}`;
  return <Counter count={counterState as unknown as number}>{label}</Counter>;
};

export const HookstateComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <Display />
  </div>
);

HookstateComponent.displayName = 'Hook State';
