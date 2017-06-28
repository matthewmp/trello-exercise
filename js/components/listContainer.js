import React from 'react';
import List from './list';

 export class ListContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			inpTxt: '',
			cards: []
		};
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

		onAddInputChanged(e){
			console.log('Input Changing.');
			this.setState({
				inpTxt: e.target.value
			});
		}

		onAddSubmit(e){
			e.preventDefault();
			console.log('Submiting');
			this.setState({
				cards: this.state.cards.concat(this.state.inpTxt)
			});
		}

		render(){
			return (
				<List cards={this.state.cards} onChange={this.onAddInputChanged} onSubmit={this.onAddSubmit} />
				);
		}
}