import React from 'react';
import {useBooksState} from './store';
import {Control} from '../../common/Control';
import {Counter} from '../../common/Counter';

const Controls = () => {
  const {fetchBooks} = useBooksState();
  return <Control increment={fetchBooks} />;
};

const Display = () => {
  const {data, isLoading} = useBooksState();
  return <Counter data={data} isLoading={isLoading} />;
};

export const HookstateComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <Display />
  </div>
);

HookstateComponent.displayName = 'Hook State';
