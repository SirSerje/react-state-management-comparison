import {useApplicationState} from './store';
import React from 'react';
import {Control} from '../../common/Control';
import {BookView} from '../../common/BookView';

const Controls = () => {
  console.count('|   Controls Zustand');
  const {fetchBook} = useApplicationState();
  return <Control onFetch={fetchBook} />;
};

const View = () => {
  console.count('|   View Zustand');
  const {
    books: {data},
    isLoading,
  } = useApplicationState();
  return <BookView data={data} isLoading={isLoading} />;
};

export const ZustandComponent = () => {
  console.count('|--Container Zustand');
  return (
    <div className="example">
      <Controls />
      <div className="break" />
      <View />
    </div>
  );
};

ZustandComponent.displayName = 'Zustand';
