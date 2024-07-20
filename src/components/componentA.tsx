import { Component, createSignal, JSX } from 'solid-js';
import compAStyles from './componentA.module.css';

export const compAVar = "compAVar";
export const [compAValue, setCompAValue] = createSignal<string | undefined>(undefined);

export const ComponentA: Component<{ children?: JSX.Element }> = (props) => {
    return (
        <div class={compAStyles.componentA}>
            <h4>Component A</h4>
            <p>Value: {compAValue()}</p>
            {props.children}
        </div>
    );
};