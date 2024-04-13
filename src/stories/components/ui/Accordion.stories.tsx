import { Meta } from '@storybook/react';
import React from 'react';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from 'components/ui/accordion';

// Import your components

export default {
	title: 'Accordion',
	component: Accordion,
	tags: ['autodocs']
} as Meta;

// Story for the Accordion component
export const DefaultAccordion = () => (
	<Accordion type="single" collapsible className="w-1/2">
		<AccordionItem value="value1">
			<AccordionTrigger>First Accordion Item</AccordionTrigger>
			<AccordionContent>Content of the first Accordion Item</AccordionContent>
		</AccordionItem>
	</Accordion>
);
