export const FETCH_LOADING = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_COMPLETE';
export const FETCH_ERROR = 'FETCH_ERROR';

export type FETCH = typeof FETCH_LOADING | typeof FETCH_SUCCESS | typeof FETCH_ERROR;

export interface Book {
  author: string;
  content: string;
  createdAt: string;
  id: string;
  updatedAt: string;
}

export interface NormalizedData<T> {
  data: T[];
  byId: {[id: string]: T};
  allIds: string[];
}
export interface State<T> {
  books: NormalizedData<T>;
  isLoading: boolean;
  // we're collecting error data to show IRL example, but we're not displaying it due to obviousness
  error: any;
}
export type BooksState = State<Book>;

export const initialState: State<Book> = {
  books: {
    data: [],
    byId: {},
    allIds: [],
  },
  isLoading: false,
  error: [],
};

export type Action = {type: FETCH; payload?: Book[]};
