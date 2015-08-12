import './main.css';

import React from 'react';
import App from './components/App';
import 'core-js/fn/array/find-index'; // adds findIndex to all arrays

(function main() {
	const app = document.createElement('div');

	document.body.appendChild(app);

	React.render(<App />, app);
}());
