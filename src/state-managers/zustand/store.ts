import create from 'zustand';
import {Book, BooksState, initialState} from '../../common/types';
import {normalize} from '../../common/normalize';

export const useApplicationState = create<BooksState & {fetchBook: () => Promise<void>}>((set, get) => ({
  ...initialState,
  fetchBook: async () => {
    set({isLoading: true});
    try {
      const response = await fetch('http://localhost:3067/data');
      const books = await response.json();
      set({books: normalize<Book>(books)});
      set({isLoading: false});
    } catch (e) {
      set({error: [e]});
      set({isLoading: false});
    }
  },
}));
