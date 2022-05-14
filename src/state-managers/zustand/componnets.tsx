import {useApplicationState} from "./store";
import React from "react";

const Controls = () => {
    const {increment, decrement} = useApplicationState()
    return <>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
    </>
}

const Display = () => {
    const {counter} = useApplicationState()
    return <i>current: {counter}</i>
}

export const ZustandComponent = () => {
    return <>
        <Controls/>
        <Display/>
    </>
}