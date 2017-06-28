
import React from 'react';
import {ListContainer} from './listContainer';



export default function Board(props){

	return (

		<div className="board">	
				<h1>{props.title}</h1>

			
				<ListContainer />
				<ListContainer />
				<ListContainer />
	

			
		</div>

	);
}