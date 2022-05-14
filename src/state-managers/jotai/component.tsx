import {useAtom} from 'jotai';
import {counterAtom, incrementAtom, decrementAtom} from "./store";
import React from "react";

const Controls = () => {
    const [increment, setIncrement] = useAtom(incrementAtom);
    const [decrement, setDecrement] = useAtom(decrementAtom);

    return <>
        <button onClick={() => setIncrement(1)}>+</button>
        <button onClick={() => setDecrement(1)}>-</button>
    </>
}

const Display = () => {
    const [counter] = useAtom(counterAtom);
    return <i>current: {counter}</i>
}

export const JotaiComponent = () => {
    return <>
        <Controls/>
        <Display/>
    </>
}