import React from 'react'
import { useStore, useEvent } from "effector-react";
import { $counter, increment, decrement } from './store'

const Controls = () => {
    const onIncrement = useEvent(increment);
    const onDecrement = useEvent(decrement);
    return <>
        <button onClick={() => onIncrement()}>+</button>
        <button onClick={() => onDecrement()}>-</button>
    </>
}

const Display = () => {
    const counter = useStore($counter);
    return <i>current: {counter}</i>
}

export const EffectorComponent = () => {
    return <>
        <Controls/>
        <Display/>
    </>
}

