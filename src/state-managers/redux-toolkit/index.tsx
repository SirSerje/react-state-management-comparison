import {Provider, useDispatch, useSelector} from 'react-redux';
import {selectBook, store, fetchBooks, selectLoading, Dispatcher} from './store';
import React from 'react';
import {Counter} from '../../common/Counter';
import {Control} from '../../common/Control';

const Controls = () => {
  const dispatch = useDispatch<Dispatcher>();
  return <Control increment={() => dispatch(fetchBooks())} />;
};
const Display = () => {
  const data = useSelector(selectBook);
  const isLoading = useSelector(selectLoading);
  return <Counter isLoading={isLoading} data={data} />;
};

export const reduxToolkitComponent = () => (
  <Provider store={store}>
    <div className="example">
      <Controls />
      <div className="break" />
      <Display />
    </div>
  </Provider>
);
reduxToolkitComponent.displayName = 'Redux Toolkit';
