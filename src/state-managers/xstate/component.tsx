import React from "react";
import {ApplicationContextProvider, useApplicationContext} from "./store";


const Controls = () => {
    const {increment, decrement} = useApplicationContext()
    return <>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
    </>
}

const Display = () => {
    const { counter } = useApplicationContext();
    return <i>current: {counter}</i>
}

export const xStateComponent = () => {
    return <ApplicationContextProvider><>
        <Controls/>
        <Display/>
    </>
    </ApplicationContextProvider>
}


