// Button.stories.js
import { action } from '@storybook/addon-actions';
import React from 'react';

import Button from 'components/Button';

// import Button from 'components/Button';

export default {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'Click me',
	},
	argTypes: {
		variant: { control: 'select', options: ['primary', 'secondary', 'danger'] },
	},
};

export const Primary = {
	args: {
		variant: 'primary',
	},
};
