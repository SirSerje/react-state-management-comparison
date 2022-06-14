import {useApplicationState} from './store';
import React from 'react';
import {Control} from '../../common/Control';
import {BookView} from '../../common/BookView';

const Controls = () => {
  const {fetchBook} = useApplicationState();
  return <Control onFetch={fetchBook} />;
};

const View = () => {
  const {
    books: {data},
    isLoading,
  } = useApplicationState();
  return <BookView data={data} isLoading={isLoading} />;
};

export const ZustandComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <View />
  </div>
);

ZustandComponent.displayName = 'Zustand';
