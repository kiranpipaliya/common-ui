// Button.stories.js
import React from 'react';

import { Button } from 'components/ui/button';

export default {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'Click'
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
		},
		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'icon']
		}
	}
};

export const Primary = {
	args: {
		variant: 'primary'
	}
};
