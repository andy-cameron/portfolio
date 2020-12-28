import './MenuBar.css';
import React from 'react';

class MenuBar extends React.Component {
	render() {
		return (
			<div>
				<div className='menu'>
					<a href=''>Home</a>
					<a href=''>About Me</a>
					<a href=''>Projects</a>
					<a href='' className='contact-button'>
						Contact
					</a>
					<span className='menu-indicator' />
				</div>
			</div>
		);
	}
}

export default MenuBar;
