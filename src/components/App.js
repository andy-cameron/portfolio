import './App.css';
import React from 'react';
import MenuBar from './MenuBar';

class App extends React.Component {
	render() {
		return (
			<div className='background'>
				<MenuBar />
			</div>
		);
	}
}

export default App;
