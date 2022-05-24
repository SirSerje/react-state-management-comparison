import React from 'react';
import './App.scss';
import {reduxToolkitComponent} from './state-managers/redux-toolkit';
import {reduxComponent} from './state-managers/redux';
import {ZustandComponent} from './state-managers/zustand';
import {xStateComponent} from './state-managers/xstate';
import {JotaiComponent} from './state-managers/jotai';
import {MobxComponent} from './state-managers/mobx';
import {HookstateComponent} from './state-managers/hookstate';
import {EffectorComponent} from './state-managers/effector';
import {Checkbox} from './common/Checkbox';

// set map of the state managers
const componentsMap = new Map();
componentsMap.set(0, reduxComponent);
componentsMap.set(1, reduxToolkitComponent);
componentsMap.set(2, ZustandComponent);
componentsMap.set(3, xStateComponent);
componentsMap.set(4, JotaiComponent);
componentsMap.set(5, MobxComponent);
componentsMap.set(6, HookstateComponent);
componentsMap.set(7, EffectorComponent);

export default () => {
  const [stateManager, setStateManager] = React.useState(0);
  const isChecked = (i: number): boolean => i === stateManager;
  const handleChange = (i: number) => setStateManager(i);

  const current = componentsMap.get(stateManager);
  return (
    <div className="App">
      <aside className="sidenav">
        <ul>
          {[...componentsMap].map(([i, component], idx) => (
            <li key={`element:${idx}`}>
              <Checkbox label={component.displayName} value={isChecked(idx)} onChange={() => handleChange(idx)} />
            </li>
          ))}
        </ul>
      </aside>
      <main className="main">
        <div className="section">
          <h3>{current.displayName}</h3>
          {current()}
        </div>
      </main>
    </div>
  );
};
