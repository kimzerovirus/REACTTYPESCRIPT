import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WordRelay from './components/WordRelay';
import Nav from './components/Nav/Nav';

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/wordrelay" element={<WordRelay />} />
			</Routes>
		</>
	);
}

export default App;
