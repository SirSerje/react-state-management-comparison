import {CaseReducer, configureStore, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {Book, BooksState, initialState} from '../../common/types';
import {normalize} from '../../common/normalize';

export const fetchBooks =
  (quantity?: any) =>
  (dispatch: Dispatch): any => {
    dispatch(loading());
    fetch('http://localhost:3067/data')
      .then((response) => response.json())
      .then((data: Book[]) => {
        dispatch(success(data));
      })
      .catch((e) => {
        dispatch(error(e));
      });
  };

const loadingReducer: CaseReducer<BooksState> = (state) => {
  state.books = {...initialState.books};
  state.isLoading = true;
  state.error = [];
};
const successReducer: CaseReducer<BooksState, PayloadAction<Book[]>> = (state, action) => {
  state.books = normalize<Book>(action.payload);
  state.isLoading = false;
  state.error = [];
};
const errorReducer: CaseReducer<BooksState, PayloadAction<Book[]>> = (state, payload) => {
  state.books = {...initialState.books};
  state.isLoading = false;
  state.error.push(payload);
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    success: successReducer,
    loading: loadingReducer,
    error: errorReducer,
  },
});

export const store = configureStore({
  // currently, the store has only 1 reducer, but it can easily changed
  // with: { reducer : { bookReducer: BookSlice.reducer } }
  reducer: booksSlice.reducer,
});

export const {loading, success, error} = booksSlice.actions;
export const selectBook = (state: RootState) => state.books.data;
export const selectLoading = (state: RootState) => state.isLoading;

export type Dispatcher = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
