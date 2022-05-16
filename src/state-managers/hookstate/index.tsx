import React from "react";
import { counter, useIncrement, useDecrement } from "./store";
import { useState } from "@hookstate/core";

const Controls = () => {
  const { increment } = useIncrement();
  const { decrement } = useDecrement();
  return (
    <>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <button onClick={() => decrement()}>-</button>
    </>
  );
};

const Display = () => {
  const counterState = useState(counter);
  const label = `current: ${counterState}`;
  return <span>{label}</span>;
};

export const HookstateComponent = () => (
  <div className="example">
    <Controls />
    <Display />
  </div>
);

HookstateComponent.displayName = "Hook State";
