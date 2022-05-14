import {Provider, useDispatch, useSelector} from "react-redux";
import {decrement, increment, reduxToolkitStore, selectCount} from "./store";
import React from "react";

const Controls = () => {
    const dispatch = useDispatch();
    return <>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </>
}

const Display = () => {
    const counter = useSelector(selectCount);
    return <i>current: {counter}</i>
}

export const ReduxComponent = () => {
    return <Provider store={reduxToolkitStore}>
        <Controls/>
        <Display/>
    </Provider>
}