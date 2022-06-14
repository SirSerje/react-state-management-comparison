import {useAtom} from 'jotai';
import {booksAtom, fetchAtom, loadingAtom} from './store';
import React from 'react';
import {Control} from '../../common/Control';
import {BookView} from '../../common/BookView';

const Controls = () => {
  const [, fetchData] = useAtom(fetchAtom);
  return <Control onFetch={fetchData} />;
};

const View = () => {
  const [isLoading] = useAtom(loadingAtom);
  const [books] = useAtom(booksAtom);
  return <BookView data={books.data} isLoading={isLoading} />;
};

export const JotaiComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <View />
  </div>
);

JotaiComponent.displayName = 'Jotai';
