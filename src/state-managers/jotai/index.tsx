import {useAtom} from 'jotai';
import {booksAtom, fetchAtom, loadingAtom} from './store';
import React from 'react';
import {Control} from '../../common/Control';
import {Counter} from '../../common/Counter';

const Controls = () => {
  const [, fetchData] = useAtom(fetchAtom);
  return <Control increment={fetchData} />;
};

const Display = () => {
  const [isLoading] = useAtom(loadingAtom);
  const [books] = useAtom(booksAtom);
  return <Counter data={books.data} isLoading={isLoading} />;
};

export const JotaiComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <Display />
  </div>
);

JotaiComponent.displayName = 'Jotai';
