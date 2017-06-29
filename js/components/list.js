
import React from 'react';
import Card from './card';

export default function List(props){
	return (
		<div className="list">
			
			{props.cards.map((card, ind) => (
				<Card text={card}  key={ind}/>
			))}

			<form onSubmit={props.onSubmit}>
				<input type="text" onChange={props.onChange}/>
				<button type="submit">Submit</button>
			</form> 
		</div>
	);
}

