export default {};
// TODO: cant install @xstate/react
/*

import { createMachine, interpret,  assign } from 'xstate';
import React, { FC, createContext, useContext } from "react";
import { useMachine } from "@xstate/react";
import {AuxProps} from "../../types";

type CounterContext = {
    counter: number;
};
const increment = (context: CounterContext) => context.counter + 1;
const decrement = (context: CounterContext) => context.counter - 1;

interface ApplicationState extends CounterContext {
    counter: number;
    increment: () => void;
    decrement: () => void;
}

type CounterEvent = { type: "INCREMENT" } | { type: "DECREMENT" };


const counterMachine = createMachine<CounterContext, CounterEvent>({
    initial: 'active',
    context: {
        counter: 0
    },
    states: {
        active: {
            on: {
                INCREMENT: {
                    actions: assign({ counter: increment }),
                },
                DECREMENT: {
                    actions: assign({ counter: decrement }),
                    cond: (context) => context.counter >= 0
                }
            }
        }
    }
});
const ApplicationContext = createContext<ApplicationState>({
    counter: 0,
    increment: () => {},
    decrement: () => {},
});

const useApplicationState = (): ApplicationState => {
    const [state, send] = useMachine(counterMachine);

    return {
        counter: state.context.counter,
        increment: () => send("INCREMENT"),
        decrement: () => send("DECREMENT"),
    };
};
interface Props {
    children: JSX.Element,
}
export const ApplicationContextProvider: FC<Props> = ({
                                                                        children,
                                                                    }) => (
    <ApplicationContext.Provider value={useApplicationState()}>
        {children}
        </ApplicationContext.Provider>
);

export const useApplicationContext = () => useContext(ApplicationContext);*/
