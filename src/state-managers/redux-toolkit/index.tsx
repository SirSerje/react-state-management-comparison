import { Provider, useDispatch, useSelector } from "react-redux";
import { decrement, increment, reduxToolkitStore, selectCount } from "./store";
import React from "react";
import { ITERATION } from "../constants";

const Controls = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          for (let i: number = 0; i < ITERATION; i++) {
            dispatch(increment());
          }
        }}
      >
        +
      </button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};
const Display = () => {
  const counter = useSelector(selectCount);
  return <span>current: {counter}</span>;
};

export const reduxToolkitComponent = () => (
  <Provider store={reduxToolkitStore}>
    <div className="example">
      <Controls />
      <Display />
    </div>
  </Provider>
);
reduxToolkitComponent.displayName = "Redux Toolkit";
