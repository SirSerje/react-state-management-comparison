import React from 'react';
import {observer} from 'mobx-react-lite';
import {store} from './store';
import {Control} from '../../common/Control';
import {BookView} from '../../common/BookView';

const Controls = observer(() => {
  return <Control onFetch={store.fetch} />;
});

const View = observer(() => {
  return <BookView isLoading={store.state.isLoading} data={store.state.books.data} />;
});
export const MobxComponent = () => (
  <div className="example">
    <Controls />
    <div className="break" />
    <View />
  </div>
);

MobxComponent.displayName = 'MobX';
