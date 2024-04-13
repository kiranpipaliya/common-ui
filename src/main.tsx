import React from 'react';
import * as ReactDom from 'react-dom';

import 'index.css';

ReactDom.render(
	<React.StrictMode>
		<h1 className="test-style">This is how you use tailwind 😀</h1>
		<div>Use this to run local development environment of this library</div>
	</React.StrictMode>,
	document.getElementById('root')
);
