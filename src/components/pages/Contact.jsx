import React, { useReducer } from 'react';

const InitialState = { count : 0};

const reducer = (state, action) => {
    const {type } = action || {};

    if (!type) throw new Error("Action type must be defiened");

    switch (type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error("ENter a type");
    }
};
function Contact() {

    const [state, dispatch] = useReducer(reducer, InitialState)
    return (
        <div>
            <h1>Counter : {state.count}</h1>
            <button onClick = {() => dispatch({type:'increment'})}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    )
}

export default Contact
 