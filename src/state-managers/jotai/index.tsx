import { useAtom } from "jotai";
import { counterAtom, incrementAtom, decrementAtom } from "./store";
import React from "react";

const Controls = () => {
  const [, setIncrement] = useAtom(incrementAtom);
  const [, setDecrement] = useAtom(decrementAtom);

  return (
    <>
      <button onClick={() => setIncrement()}>+</button>
      <button onClick={() => setDecrement()}>-</button>
    </>
  );
};

const Display = () => {
  const [counter] = useAtom(counterAtom);
  return <span>current: {counter}</span>;
};

export const JotaiComponent = () => (
  <div className="example">
    <Controls />
    <Display />
  </div>
);

JotaiComponent.displayName = "Jotai";
