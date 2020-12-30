import './App.css';
import React, { useState } from 'react';
import MenuBar from './MenuBar';
import About from './About';
import Home from './Home';

export default () => {
	const [currentScreen, setCurrentScreen] = useState('');

	return (
		<div className='background'>
			<div className='header-container'>
				<MenuBar />
			</div>
			<div className='screens-container'>
				<Home />
				<About />
			</div>
		</div>
	);
};
