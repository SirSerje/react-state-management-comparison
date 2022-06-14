import React from 'react';
import {useBooksState} from './store';
import {Control} from '../../common/Control';
import {BookView} from '../../common/BookView';

const Controls = () => {
  console.count('|   Control Hookstate');
  const {fetchBooks} = useBooksState();
  return <Control onFetch={fetchBooks} />;
};

const View = () => {
  console.count('|   View Hookstate');
  const {data, isLoading} = useBooksState();
  return <BookView data={data} isLoading={isLoading} />;
};

export const HookstateComponent = () => {
  console.count('|--Container Hookstate');

  return (
    <div className="example">
      <Controls />
      <div className="break" />
      <View />
    </div>
  );
};

HookstateComponent.displayName = 'Hook State';
