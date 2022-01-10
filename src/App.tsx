import React from 'react';
import './App.css';
import Container from './components/StyleContainer';
import Button from './components/event/Button';
import Input from './components/event/Input';
import { Greet } from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

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
			<Status status="loading" />
			<Heading>Placeholder text</Heading>
			{/* props를 이렇게도 넘길 수 있음 */}
			<Oscar>
				<Heading>Oscar goes to Leonardo</Heading>
			</Oscar>
			<Button
				handleClick={(event, id) => {
					console.log('ButtonClick', event, id);
				}}
			/>
			<Input value="" handleChange={event => console.log(event)} />
			<Container styles={{ border: '1px solid black', padding: '6px 12px' }} />
		</div>
	);
}

export default App;
