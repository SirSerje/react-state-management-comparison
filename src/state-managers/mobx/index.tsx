import React from "react";
import { observer } from "mobx-react-lite";
import { mobxStore } from "./store";
import { ITERATION } from "../constants";

const Controls = observer(() => {
  return (
    <>
      <button
        onClick={() => {
          for (let i: number = 0; i < ITERATION; i++) {
            mobxStore.increment();
          }
        }}
      >
        +
      </button>
      <button onClick={() => mobxStore.decrement()}>-</button>
    </>
  );
});
const Display = observer(() => {
  return <span>current: {mobxStore.counter}</span>;
});
export const MobxComponent = () => (
  <div className="example">
    <Controls />
    <Display />
  </div>
);

MobxComponent.displayName = "MobX";
