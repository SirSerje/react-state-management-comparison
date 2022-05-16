import React from "react";
import { ApplicationContextProvider, useApplicationContext } from "./store";
import { ITERATION } from "../constants";

const Controls = () => {
  const { increment, decrement } = useApplicationContext();
  return (
    <>
      <button
        onClick={() => {
          for (let i: number = 0; i < ITERATION; i++) {
            increment();
          }
        }}
      >
        +
      </button>
      <button onClick={() => decrement()}>-</button>
    </>
  );
};

const Display = () => {
  const { counter } = useApplicationContext();
  return <span>current: {counter}</span>;
};

export const xStateComponent = () => (
  <ApplicationContextProvider>
    <div className="example">
      <Controls />
      <Display />
    </div>
  </ApplicationContextProvider>
);

xStateComponent.displayName = "XState";
