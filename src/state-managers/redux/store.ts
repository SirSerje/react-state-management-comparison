import {AnyAction, applyMiddleware, createStore, Dispatch} from 'redux';
import {
  Action,
  Book,
  BooksState,
  FETCH_ERROR,
  FETCH_LOADING,
  FETCH_SUCCESS,
  initialState,
  NormalizedData,
  State,
} from '../../common/types';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {normalize} from '../../common/normalize';

// https://stackoverflow.com/questions/71401516/error-in-dispatch-async-function-is-not-assignable-to-parameter-of-type-anyactio
export type Dispatcher = ThunkDispatch<BooksState, undefined, AnyAction>;

export const fetchBooks = (quantity?: number) => (dispatch: Dispatcher, getState: any) => {
  dispatch({type: FETCH_LOADING});
  fetch('http://localhost:3067/data')
    .then((response) => response.json())
    .then((data) => {
      dispatch({type: FETCH_SUCCESS, payload: data});
    })
    .catch((e) => {
      dispatch({type: FETCH_ERROR, payload: e});
    });
};

export const counterReducer = (state = initialState, action: Action): State<Book> => {
  const {type} = action;

  switch (type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        books: (Array.isArray(action.payload) ? normalize<Book>(action?.payload) : []) as NormalizedData<Book>,
        isLoading: false,
        error: [],
      };
    case FETCH_LOADING:
      return {...state, isLoading: true, error: []};
    case FETCH_ERROR:
      return {...state, isLoading: false, error: [...state.error, action.payload]};
    default:
      return state;
  }
};

export const store = createStore(counterReducer, initialState, applyMiddleware(thunk));
