import React, { PropTypes } from 'react';
import { CreateCharacter } from '../create';

export function CharacterItem(props) {
	function getHouse(houseId) {
		return props.houses.filter((house) => {
			return house.id === houseId;
		})[0] || {};
	}
	return (<div>
		<label htmlFor="">First name: </label>
		<span>{props.firstName}</span>
		<br/>
		<label htmlFor="">Last name: </label>
		<span>{props.lastName}</span>
		<br/>
		<label htmlFor="">Gender: </label>
		<span>{props.gender}</span>
		<br/>
		<label htmlFor="">House: </label>
		<span>{getHouse(props.houseId).name}</span>
		<br/>
		<label htmlFor="">Alive: </label>
		<span>{props.isAlive ? 'Yes!' : 'Gone'}</span>
		<br/>
		<button onClick={props.edit}>edit</button>
		<button onClick={(e) => {props.delete(props)}}>delete</button>
	</div>)
}

export class CharacterItemWithEdit extends React.Component {
	constructor(options) {
		super(options);
		this.state = {
			isEdit: false
		}
	}

	updateCharacter(data) {
		this.props.actions.updateCharacter(data);
		this.setState({isEdit: false});
	}

	render() {
		return  (
			<div>
				{ this.state.isEdit
					? <CreateCharacter
						{...this.props}
						onSubmit={this.updateCharacter.bind(this)}
						/>
					: <CharacterItem edit={ () => {this.setState({isEdit: true})}}
					                 delete={ this.props.actions.removeCharacter }
					                 {...this.props} /> }
			</div>
		)
	}



}