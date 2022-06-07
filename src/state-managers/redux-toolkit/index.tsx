import {Provider, useDispatch, useSelector} from 'react-redux';
import {decrement, increment, reduxToolkitStore, selectCount} from './store';
import React from 'react';
import {Counter} from '../../common/Counter';
import {Control} from '../../common/Control';

const Controls = () => {
    const dispatch = useDispatch();
    return <Control increment={() => {
        for (let i: number = 0; i < 5000; i++) {
            dispatch(increment())
        }
        ;console.time('start')
    }} decrement={() => dispatch(decrement())}/>;
    return (
        <>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </>
    );
};
const Display = () => {
    console.timeEnd('start')
    const counter = useSelector(selectCount);
    return <Counter count={counter}/>;
};

export const reduxToolkitComponent = () => (
    <Provider store={reduxToolkitStore}>
        <div className="example">
            <Controls/>
            <div className="break"/>
            <Display/>
        </div>
    </Provider>
);
reduxToolkitComponent.displayName = 'Redux Toolkit';
