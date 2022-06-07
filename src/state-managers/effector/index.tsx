import React from 'react';
import {useEvent, useStore} from 'effector-react';
import {$counter, decrement, increment} from './store';
import {Control} from '../../common/Control';
import {Counter} from '../../common/Counter';

const Controls = () => {
  const onIncrement = useEvent(increment);
  const onDecrement = useEvent(decrement);
  return <Control increment={() => {for(let i: number = 0; i<5000;i++){onIncrement()};console.time('start')}} decrement={onDecrement} />;
};

const Display = () => {
    console.timeEnd('start')
  const counter = useStore($counter);
  return <Counter count={counter} />;
};

export const EffectorComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <Display />
  </div>
);

EffectorComponent.displayName = 'Effector';
