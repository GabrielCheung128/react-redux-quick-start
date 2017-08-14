import { fromJS, Map } from 'immutable';
import { createReducer } from 'redux-create-reducer';

import { actions } from 'Constants/characters';

export const initState = [];

function CREATE_CHARACTER(state, action) {
	return state.push(Map(action.data));
}

function KILL_CHARACTER(state, action) {
	const index = state.findIndex((item) => {
		return item.get('id') === action.data.id;
	});

	return state.update(index, (character) => {
		return character.set('isAlive', false);
	})
}

function REMOVE_CHARACTER(state, action) {
	return state.filter((item) => {
		return item.get('id') != action.data.id;
	});
}

function BRING_BACK_CHARACTER(state, action) {
	const index = state.findIndex((item) => {
		return item.get('id') === action.data.id;
	});

	return state.update(index, (character) => {
		return character.set('isAlive', true);
	})
}


function UPDATE_CHARACTER(state, action) {
	const index = state.findIndex((item) => {
		return item.get('id') === action.data.id;
	});

	return state.update(index, (character) => {
		return Map(action.data);
	})
}


export default createReducer(initState, {
	[actions.CREATE_CHARACTER]: CREATE_CHARACTER,
	[actions.REMOVE_CHARACTER]: REMOVE_CHARACTER,
	[actions.KILL_CHARACTER]: KILL_CHARACTER,
	[actions.BRING_BACK_CHARACTER]: BRING_BACK_CHARACTER,
	[actions.UPDATE_CHARACTER]: UPDATE_CHARACTER
})
