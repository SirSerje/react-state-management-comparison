import React from "react";
import {counter, useIncrement, useDecrement} from "./store";
import { useState } from "@hookstate/core";

const Controls = () => {
    const {increment} = useIncrement();
    const {decrement} = useDecrement();
    return <>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
    </>
}

const Display = () => {
    const counterState = useState(counter)
    return <i>current: {counterState.get()}</i>
}

export const HookstateComponent = () => {
    return <>
        <Controls/>
        <Display/>
    </>
}