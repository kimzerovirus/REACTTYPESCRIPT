import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
	const personName = {
		first: 'Ryan',
		last: 'Whale',
	};

	const nameList = [
		{ first: 'person1', last: 'rara1' },
		{ first: 'person2', last: 'rara2' },
		{ first: 'person3', last: 'rara3' },
	];

	return (
		<div className="App">
			<Greet name="kzv" count={5} />
			<Person name={personName} />
			<PersonList names={nameList} />
		</div>
	);
}

export default App;
