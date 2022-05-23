import {useAtom} from 'jotai';
import {counterAtom, decrementAtom, incrementAtom} from './store';
import React from 'react';
import {Control} from '../../common/Control';
import {Counter} from '../../common/Counter';

const Controls = () => {
  const [, setIncrement] = useAtom(incrementAtom);
  const [, setDecrement] = useAtom(decrementAtom);
  return <Control increment={setIncrement} decrement={setDecrement} />;
};

const Display = () => {
  const [counter] = useAtom(counterAtom);
  return <Counter count={counter} />;
};

export const JotaiComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <Display />
  </div>
);

JotaiComponent.displayName = 'Jotai';
