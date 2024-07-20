import { Component, createSignal, JSX } from 'solid-js';
import { compAVar } from './componentA';
import './componentB.css';

export const [compBValue, setCompBValue] = createSignal<string | undefined>(undefined);

export const doThing = () => {
    const a = compAVar;
};

export const ComponentB: Component<{ children?: JSX.Element }> = (props) => {
    return (
        <div class="componentB">
            <h4>Component B</h4>
            <p>Value: {compBValue()}</p>
            {props.children}
        </div>
    );
};