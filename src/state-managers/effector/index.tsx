import React from "react";
import { useEvent, useStore } from "effector-react";
import { $counter, decrement, increment } from "./store";

const Controls = () => {
  const onIncrement = useEvent(increment);
  const onDecrement = useEvent(decrement);
  return (
    <>
      <button onClick={() => onIncrement()}>+</button>
      <button onClick={() => onDecrement()}>-</button>
    </>
  );
};

const Display = () => {
  const counter = useStore($counter);
  return <span>current: {counter}</span>;
};

export const EffectorComponent = () => (
  <div className="example">
    <Controls />
    <Display />
  </div>
);

EffectorComponent.displayName = "Effector";
