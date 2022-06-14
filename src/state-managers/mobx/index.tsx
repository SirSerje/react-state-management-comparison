import React from 'react';
import {observer} from 'mobx-react-lite';
import {store} from './store';
import {Control} from '../../common/Control';
import {BookView} from '../../common/BookView';

const Controls = observer(() => {
  console.count('|   Controls MobX');
  return <Control onFetch={store.fetch} />;
});

const View = observer(() => {
  console.count('|   View MobX');
  const {isLoading, books} = store.state;
  console.log(isLoading, books.data.length);
  return <BookView isLoading={isLoading} data={books.data} />;
});
export const MobxComponent = () => {
  console.count('|--Container MobX');
  return (
    <div className="example">
      <Controls />
      <div className="break" />
      <View />
    </div>
  );
};

MobxComponent.displayName = 'MobX';
