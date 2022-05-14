import {createEvent, createStore, createEffect, combine, sample } from 'effector';

export const increment = createEvent()
export const decrement = createEvent();

export const $counter = createStore<number>(0)
$counter.on(increment, state => state + 1);
$counter.on(decrement, state => {
    if(state > 0) {
        return state - 1
    }
});