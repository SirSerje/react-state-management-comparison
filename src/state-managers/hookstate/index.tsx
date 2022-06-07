import React from 'react';
import {counter, useDecrement, useIncrement} from './store';
import {useState} from '@hookstate/core';
import {Control} from '../../common/Control';
import {Counter} from '../../common/Counter';

const Controls = () => {
    const {increment} = useIncrement();
    const {decrement} = useDecrement();
    return <Control increment={() => {
        for (let i: number = 0; i < 5000; i++) {
            increment()
        }
        console.time('start')
    }} decrement={decrement}/>;
};

const Display = () => {
    console.timeEnd('start');
    const counterState = useState(counter);
    return <Counter count={counterState.value}/>;
};

export const HookstateComponent = () => (
    <div className="example">
        <Controls/>
        <div className="break"/>
        <Display/>
    </div>
);

HookstateComponent.displayName = 'Hook State';
