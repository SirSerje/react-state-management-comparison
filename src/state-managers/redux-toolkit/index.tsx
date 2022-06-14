import {Provider, useDispatch, useSelector} from 'react-redux';
import {selectBook, store, fetchBooks, selectLoading, Dispatcher} from './store';
import React from 'react';
import {BookView} from '../../common/BookView';
import {Control} from '../../common/Control';

const Controls = () => {
  console.count('|   Controls Toolkit');
  const dispatch = useDispatch<Dispatcher>();
  return <Control onFetch={() => dispatch(fetchBooks())} />;
};
const View = () => {
  console.count('|   View Toolkit');
  const data = useSelector(selectBook);
  const isLoading = useSelector(selectLoading);
  return <BookView isLoading={isLoading} data={data} />;
};

export const reduxToolkitComponent = () => {
  console.count('|--Container Toolkit');
  return (
    <Provider store={store}>
      <div className="example">
        <Controls />
        <div className="break" />
        <View />
      </div>
    </Provider>
  );
};
reduxToolkitComponent.displayName = 'Redux Toolkit';
