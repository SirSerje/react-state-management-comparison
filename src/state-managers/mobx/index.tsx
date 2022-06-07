import React from 'react';
import {observer} from 'mobx-react-lite';
import {mobxStore} from './store';
import {Control} from '../../common/Control';
import {Counter} from '../../common/Counter';

const Controls = observer(() => {
  return <Control increment={() => {for(let i: number = 0; i<5000;i++){mobxStore.increment()};console.time('start')}} decrement={mobxStore.decrement} />;
});

const Display = observer(() => {
    console.timeEnd('start')
  return <Counter count={mobxStore.counter} />;
});
export const MobxComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <Display />
  </div>
);

MobxComponent.displayName = 'MobX';
