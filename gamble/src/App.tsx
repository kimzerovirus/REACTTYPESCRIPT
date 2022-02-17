import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WordRelay from './components/WordRelay';
import Nav from './components/Nav/Nav';
import BaseBall from './components/BaseBall';
import RockPaperScissors from './components/RockPaperScissors';

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/wordrelay" element={<WordRelay />} />
				<Route path="/baseball" element={<BaseBall />} />
				<Route path="/rockpaperscissors" element={<RockPaperScissors />} />
			</Routes>
		</>
	);
}

export default App;
