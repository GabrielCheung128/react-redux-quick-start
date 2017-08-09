import { bindActionCreators } from "redux";

import * as characters from 'Actions/characters';

export default function bindActions(dispatch) {
	return {
		characterList: {
			createCharacter: bindActionCreators(characters.createCharacter, dispatch),
			removeCharacter: bindActionCreators(characters.removeCharacter, dispatch),
			updateCharacter: bindActionCreators(characters.updateCharacter, dispatch)
		}
	}
};
