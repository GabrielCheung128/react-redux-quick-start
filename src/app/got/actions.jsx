import { bindActionCreators } from "redux";

import * as characters from 'Actions/characters';

export default function bindActions(dispatch) {
	return {
		characterList: {
			createCharacter: bindActionCreators(characters.create, dispatch),
			removeCharacter: bindActionCreators(characters.remove, dispatch),
			updateCharacter: bindActionCreators(characters.update, dispatch)
		}
	}
};
