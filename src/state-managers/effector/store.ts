import {createEvent, createStore, createEffect, combine, sample} from 'effector';
import {Book, initialState} from '../../common/types';
import {normalize} from '../../common/normalize';

export const fetchBooks = createEvent();

export const getDataFx = createEffect(async () => {
  const req = await fetch('http://localhost:3067/data');
  return req.json();
});

export const $books = createStore<typeof initialState>(initialState);
$books.on(getDataFx.doneData, (state, books: Book[]) => ({
  books: normalize<Book>(books),
  isLoading: false,
  error: [],
}));

$books.on(getDataFx.failData, (state, error) => ({
  ...state,
  isLoading: false,
  error: [],
}));

/**
 * This method can be used for linking two nodes,
 * resulting the third one, which will fire
 * only upon clock node trigger.
 * https://effector.dev/docs/api/effector/sample/
 */
sample({
  source: $books,
  clock: fetchBooks,
  // fn: (data) => console.log, // callback
  target: getDataFx,
});
