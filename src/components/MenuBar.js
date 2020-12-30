import './MenuBar.css';
import React from 'react';

const MenuBar = () => {
	const onClick = () => {};

	return (
		<div className='menu'>
			<div className='menu-container'>
				<a onClick={onClick}>Home</a>
				<a href=''>About Me</a>
				<a href=''>Projects</a>
				<a href='' className='contact-button'>
					Contact
				</a>
				<span className='menu-indicator' />
			</div>
		</div>
	);
};

export default MenuBar;
