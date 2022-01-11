import React from 'react';

type CounterState = {
	count: number;
};

type UpdateAction = {
	type: 'increment' | 'decrement';
	payload: number;
};

type ResetAction = {
	type: 'reset';
};

// type CounterAction = {
// 	type: 'increment' | 'decrement' | 'reset';
// 	payload?: number; // "?" : optional type <<< 이렇게 하면 payload가 undefined인 경우가 발생해서 reducer함수에서 덧셈뺄셈에서 unhappy
// };

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + action.payload };
		case 'decrement':
			return { count: state.count - action.payload };
		case 'reset':
			return initialState;
		default:
			return state;
	}
}

const Counter = () => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
				Increment 10
			</button>
			<button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
				Decrement 10
			</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
		</>
	);
};

export default Counter;
