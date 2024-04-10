// Button.js
import React from 'react';

import './Button.css';

type props = {
	variant: 'primary' | 'secondary' | 'danger';
	children: any;
	onClick?: any;
};

const Button = (props: props) => {
	const { variant, children, onClick } = props;
	return (
		<button className={`button ${variant}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
