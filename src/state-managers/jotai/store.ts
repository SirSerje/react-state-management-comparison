import {atom} from 'jotai';
import {normalize} from '../../common/normalize';
import {Book, initialState, NormalizedData} from '../../common/types';

export const loadingAtom = atom(false);
export const booksAtom = atom<NormalizedData<Book>>({...initialState.books});
export const errorAtom = atom([]);

export const fetchAtom = atom(null, async (get, set) => {
  // await something
  set(loadingAtom, true);
  try {
    const raw = await fetch('http://localhost:3067/data');
    const data = await raw.json();
    set(booksAtom, normalize(data));
    set(loadingAtom, false);
  } catch (e: any) {
    set(loadingAtom, false);
    set(errorAtom, e);
  }
});
