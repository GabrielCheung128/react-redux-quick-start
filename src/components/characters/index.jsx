import React, { PropTypes } from 'react';

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
							/>
						</li>
					})}
				</ul>
				<CreateCharacter
					createCharacter={(e) => {console.log(e)}}
					houses={this.props.houses}
				/>
			</div>
		)
	}
};
