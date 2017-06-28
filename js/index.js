
require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import Data from './data';
import Board from './components/board';


document.addEventListener('DOMContentLoaded', ()=>{
	ReactDOM.render(<Board title="Trello Board"  />, document.getElementById('app'))
})

