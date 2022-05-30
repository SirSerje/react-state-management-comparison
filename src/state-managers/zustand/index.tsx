import {useApplicationState} from './store';
import React from 'react';
import {Control} from '../../common/Control';
import {Counter} from '../../common/Counter';

const Controls = () => {
  const {fetchBook} = useApplicationState();
  return <Control increment={fetchBook} />;
};

const Display = () => {
  const {
    books: {data},
    isLoading,
  } = useApplicationState();
  return <Counter data={data} isLoading={isLoading} />;
};

export const ZustandComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <Display />
  </div>
);

ZustandComponent.displayName = 'Zustand';
