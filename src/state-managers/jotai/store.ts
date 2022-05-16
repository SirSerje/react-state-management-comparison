import { atom } from "jotai";
//TODO: too primitive example, need to use smth like this:
// https://github.com/GeoffCox/recoil-examples/blob/master/atoms-tutorial/src/atoms.ts

export const counterAtom = atom(0);

export const incrementAtom = atom(
  (get) => get(counterAtom),
  (get, set) => {
    set(counterAtom, get(counterAtom) + 1);
  }
);
export const decrementAtom = atom(
  (get) => get(counterAtom),
  (get, set) => {
    if (get(counterAtom) > 0) {
      set(counterAtom, get(counterAtom) - 1);
    }
  }
);
