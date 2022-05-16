import { useApplicationState } from "./store";
import React from "react";

import { ITERATION } from "../constants";

const Controls = () => {
  const { increment, decrement } = useApplicationState();
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
  const { counter } = useApplicationState();
  return <span>current: {counter}</span>;
};

export const ZustandComponent = () => (
  <div className="example">
    <Controls />
    <Display />
  </div>
);

ZustandComponent.displayName = "Zustand";
