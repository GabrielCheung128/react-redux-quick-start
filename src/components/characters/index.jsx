import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { CharacterItemWithEdit } from './item';
import { CreateCharacter } from './create';

export class CharacterList extends React.Component {
	render(){
		return (
			<div>
				<ul>
					{this.props.characters.map((character) => {
						return <li key={`list-${character.id}`}>
							<CharacterItemWithEdit
								houses={this.props.houses}
								{ ...character }
								actions={this.props.actions}
							/>
						</li>
					})}
				</ul>
				<CreateCharacter
					onSubmit={this.props.actions.createCharacter}
					houses={this.props.houses}
					actions={this.props.actions}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	characters: state.characters,
	houses: state.houses
});

export default connect(mapStateToProps)(CharacterList);
