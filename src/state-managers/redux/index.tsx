import React, {useEffect} from 'react';
import {fetchBooks, store, Dispatcher} from './store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {BookView} from '../../common/BookView';
import {Control} from '../../common/Control';
import {BooksState} from '../../common/types';
import {withLabel} from '../../common/utils';

const Controls = () => {
  console.count('|   Controls Redux');
  const dispatch = useDispatch<Dispatcher>();
  const fetchData = () => {
    dispatch(fetchBooks());
  };
  return <Control onFetch={fetchData} />;
};

const View = () => {
  console.count('|   View Redux');
  const data = useSelector((state: BooksState) => state.books.data);
  const isLoading = useSelector((state: BooksState) => state.isLoading);
  return <BookView data={data} isLoading={isLoading} />;
};

export const reduxComponent = () => {
  console.count('|--Container Redux');
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

reduxComponent.displayName = 'Redux';
