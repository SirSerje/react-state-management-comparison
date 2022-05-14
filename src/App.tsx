import React, {ChangeEventHandler} from 'react';
import './App.css';
import {ReduxComponent} from "./state-managers/redux-toolkit/component";
import {ZustandComponent} from "./state-managers/zustand/componnets";
import {xStateComponent} from "./state-managers/xstate/component";
import {JotaiComponent} from "./state-managers/jotai/component"
import {MobxComponent} from "./state-managers/mobx/component";
import {HookstateComponent} from "./state-managers/hookstate/components";

const Checkbox: React.FC<{ label: string, value: boolean, onChange: ChangeEventHandler<HTMLInputElement> }> = ({
onChange, value, label
}) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange}/>
            {label}
        </label>
    );
};

// set map of the state managers
const map1 = new Map();

map1.set(0, ReduxComponent);
map1.set(1, ZustandComponent);
map1.set(2, xStateComponent);
map1.set(3, JotaiComponent);
map1.set(4, MobxComponent);
map1.set(5, HookstateComponent);


function App() {
    const [stateManager, setStateManager] = React.useState(5)
    const isChecked = (i: number): boolean => i === stateManager;
    const handleChange = (i: number) => setStateManager(i);

    return (
        <div className="App">
            <header className="App-header">
                {[...map1].map(([i, component], idx) => <Checkbox key={`element:${idx}`} label={component.name}
                                                                  value={isChecked(idx)}
                                                                  onChange={() => handleChange(idx)}/>)}
                {map1.get(stateManager)()}
            </header>
        </div>
    );
}

export default App;
