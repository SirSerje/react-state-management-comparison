import React from 'react';
import {observer} from 'mobx-react-lite';
import {store} from './store';
import {Control} from '../../common/Control';
import {Counter} from '../../common/Counter';

const Controls = observer(() => {
  return <Control increment={store.fetch} />;
});

const Display = observer(() => {
  return <Counter isLoading={store.state.isLoading} data={store.state.books.data} />;
});
export const MobxComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <Display />
  </div>
);

MobxComponent.displayName = 'MobX';
