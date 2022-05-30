import {createState, useState} from '@hookstate/core';
import {Book, BooksState, initialState} from '../../common/types';
import {normalize} from '../../common/normalize';
type HookstateState = Omit<BooksState, 'books'> & {books: Book[]};
export const bookInitialState = createState<HookstateState>({...initialState, books: initialState.books.data});

export function useBooksState() {
  const state = useState<HookstateState>(bookInitialState);
  const fetchBooks = async () => {
    state.merge({isLoading: true});
    try {
      const raw = await fetch('http://localhost:3067/data');
      const bookData = await raw.json();
      state.merge({isLoading: false});
      state.merge({error: []});
      state.merge({books: normalize(bookData).data as Book[]});
    } catch (error) {
      state.merge({isLoading: false});
      state.merge({books: []});
    }
  };
  return {
    get data() {
      return state.get().books;
    },
    get isLoading() {
      return state.get().isLoading;
    },
    fetchBooks,
  };
}
