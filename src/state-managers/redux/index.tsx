import React, {useEffect} from 'react';
import {fetchBooks, store, Dispatcher} from './store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {BookView} from '../../common/BookView';
import {Control} from '../../common/Control';
import {BooksState} from '../../common/types';

const Controls = () => {
  const dispatch = useDispatch<Dispatcher>();
  const fetchData = () => {
    dispatch(fetchBooks());
  };
  return <Control onFetch={fetchData} />;
};

const View = () => {
  const data = useSelector((state: BooksState) => state.books.data);
  const isLoading = useSelector((state: BooksState) => state.isLoading);
  return <BookView data={data} isLoading={isLoading} />;
};

export const reduxComponent = () => (
  <Provider store={store}>
    <div className="example">
      <Controls />
      <div className="break" />
      <View />
    </div>
  </Provider>
);

reduxComponent.displayName = 'Redux';
