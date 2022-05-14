import React from "react";
import { observer } from "mobx-react-lite"
import { mobxStore} from "./store";

const Controls = observer(() => {
    return <>
        <button onClick={() => mobxStore.increment()}>+</button>
        <button onClick={() => mobxStore.decrement()}>-</button>
    </>
}
)
const Display = observer(() => {

    return <i>current: {mobxStore.counter}</i>
}
)
export const MobxComponent = () => {
    return <>
        <Controls/>
        <Display/>
    </>
}