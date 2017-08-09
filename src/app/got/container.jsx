import React from 'react';
import { connect } from 'react-redux';

import CharacterList from 'Components/characters';

export const CharactersContainer = (props) => {
	const { actions } = props;

	return (
		<div className="character-container">
			<CharacterList actions={actions.characterList} />
		</div>
	)
};

export default connect()(CharactersContainer)