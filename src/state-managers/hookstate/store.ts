import {createState, useState} from '@hookstate/core';

export const counter = createState(0);

export const useIncrement = (): {increment: () => void} => {
  const counterState = useState(counter);
  const increment = () => counterState.set(counterState.get() + 1);
  return {increment};
};

export const useDecrement = (): {decrement: () => void} => {
  const counterState = useState(counter);
  const decrement = () => counterState.get() > 0 && counterState.set(counterState.get() - 1);
  return {decrement};
};
