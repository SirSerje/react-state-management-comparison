import React, {FC} from 'react';
import {counterReducer, decrement, increment, State} from './store';
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
import {Counter} from '../../common/Counter';
import {Control} from '../../common/Control';

const store = createStore(counterReducer);

type Dispatch = typeof store.dispatch;

interface CounterProps {
  readonly onDecrement: () => void;
  readonly onIncrement: () => void;
  count: number;
}

const mapStateToProps = (state: State) => ({count: state.count});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
});

const Controls: FC<CounterProps> = ({onIncrement, onDecrement}) => (
  <Control increment={onIncrement} decrement={onDecrement} />
);

const Display: FC<Pick<CounterProps, 'count'>> = ({count: counter}) => {
  return <Counter count={counter} />;
};

const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(Controls);

const DisplayContainer = connect(mapStateToProps)(Display);

export const reduxComponent = () => (
  <Provider store={store}>
    <div className="example">
      <ControlsContainer />
      <div className="break" />
      <DisplayContainer />
    </div>
  </Provider>
);

reduxComponent.displayName = 'Redux';
