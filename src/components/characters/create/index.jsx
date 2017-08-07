import React, { PropTypes } from 'react';

export class CreateCharacter extends React.Component {
	constructor(options) {
		super(options);
		this.state = Object.assign({}, this.initState(), this.props);
	}
	
	initState() {
		return {
			firstName: '',
			lastName: '',
			id: Math.round(Math.random() * 1000000),
			gender: '',
			houseId: '',
			isAlive: true,
			father: undefined,
			mother: undefined,
			siblings: [],
			children: []
		}
	}
	
	render() {
		return (
			<form onSubmit={(e) => {this.onSubmit(e)}}>
				<label htmlFor="">First Name: </label>
				<input type="text"
				       name="firstName"
				       value={this.state.firstName}
				       onChange={(e) => {this.setState({firstName: e.target.value})}}/>
				<br/>
				<label htmlFor="">Last Name: </label>
				<input type="text"
				       name="lastName"
				       value={this.state.lastName}
				       onChange={(e) => {this.setState({lastName: e.target.value})}}/>
				<br/>
				<label htmlFor="">Gender: </label>
				<input type="radio"
				       name="gender"
				       value={'male'}
				       id='gender-male'
				       onChange={(e) => {this.setState({gender: e.target.value})}}
				       selected={this.state.gender === 'male'}
				/>
				<label htmlFor="gender-male">Male</label>
				<input type="radio"
				       name="gender"
				       value={'female'}
				       id='gender-female'
				       onChange={(e) => {this.setState({gender: e.target.value})}}
				       selected={this.state.gender === 'male'}
				/>
				<label htmlFor="gender-female">Female</label>
				<br/>
				<label htmlFor="">House: </label>
				<select name="house" id=""
				        onChange={(e) => {this.setState({house: e.target.value})}}
				        defaultValue={this.state.house}
				>
					{
						this.props.houses.map((house) => {
							return (
								<option key={house.name} value={house.id} selected={this.state.houseId === house.id}>{house.name}</option>
							)
						})
					}
				</select>
				<br/>
				<input type="submit"/>
			</form>
		)
	}

	onSubmit(e) {
		e.preventDefault();
		if(this.validate(this.state)){
			this.props.createCharacter && this.props.createCharacter(this.state);
			this.setState(this.initState());
		}
	}

	validate(props) {
		return true;
	}
}

CreateCharacter.propTypes = {
	createCharacter: PropTypes.func.isRequired
};