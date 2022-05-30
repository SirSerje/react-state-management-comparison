import React, {createContext, FC, useContext} from 'react';
import {assign, createMachine} from 'xstate';
import {useMachine} from '@xstate/react';
import {Book, initialState, NormalizedData} from '../../common/types';
import {normalize} from '../../common/normalize';

type CounterContext = {books: NormalizedData<Book>};

interface ApplicationState extends CounterContext {
  fetchBooks: () => void;
}

type CounterEvent = {type: 'FETCH'};

const getBooksData = () =>
  fetch('http://localhost:3067/data')
    .then((response) => response.json())
    .catch();

const counterMachine = createMachine<CounterContext, CounterEvent>({
  initial: 'idle',
  context: {
    books: {...initialState.books},
  },
  states: {
    idle: {on: {FETCH: 'loading'}},
    loading: {
      invoke: {
        id: 'fetchData',
        src: (context, event) => getBooksData(),
        onDone: {
          target: 'success',
          actions: assign({books: (context, event) => normalize(event.data)}),
        },
        onError: {
          target: 'failure',
          actions: assign({books: (context, event) => ({...initialState.books})}),
        },
      },
    },
    success: {},
    failure: {},
  },
});
const ApplicationContext = createContext<ApplicationState>({
  fetchBooks: () => {},
  books: {...initialState.books},
});

const useApplicationState = (): ApplicationState => {
  const [state, send] = useMachine(counterMachine);
  return {
    books: {...state.context.books},
    fetchBooks: () => send('FETCH'),
  };
};

interface Props {
  children: JSX.Element;
}

export const ApplicationContextProvider: FC<Props> = ({children}) => (
  <ApplicationContext.Provider value={useApplicationState()}>{children}</ApplicationContext.Provider>
);

export const useApplicationContext = () => useContext(ApplicationContext);
