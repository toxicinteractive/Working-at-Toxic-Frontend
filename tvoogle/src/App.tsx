import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/tv/:id" element={<DetailsPage />} />
			</Routes>
		</div>
	);
}

export default App;
