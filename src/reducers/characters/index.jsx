import { fromJS, Map } from 'immutable';
import { createReducer } from 'redux-create-reducer';

import { actions } from 'Constants/characters';

export const initState = [];

function CREATE_CHARACTER(state, action) {
	const characters = fromJS(state);
	return characters.push(Map(action.data)).toJS();
}

function KILL_CHARACTER(state, action) {
	const characters = fromJS(state);
	const index = characters.findIndex((item) => {
		return item.get('id') === action.data.id;
	});

	return characters.update(index, (character) => {
		return character.set('isAlive', false);
	}).toJS()
}

function REMOVE_CHARACTER(state, action) {
	const characters = fromJS(state);
	return characters.filter((item) => {
		return item.get('id') != action.data.id;
	}).toJS();
}

function BRING_BACK_CHARACTER(state, action) {
	const characters = fromJS(state);
	const index = characters.findIndex((item) => {
		return item.get('id') === action.data.id;
	});

	return characters.update(index, (character) => {
		return character.set('isAlive', true);
	}).toJS();
}


function UPDATE_CHARACTER(state, action) {
	const characters = fromJS(state);
	const index = characters.findIndex((item) => {
		return item.get('id') === action.data.id;
	});
	console.log(action);
	return characters.update(index, (character) => {
		return character.merge(action.data);
	}).toJS()
}


export default createReducer(initState, {
	[actions.CREATE_CHARACTER]: CREATE_CHARACTER,
	[actions.REMOVE_CHARACTER]: REMOVE_CHARACTER,
	[actions.KILL_CHARACTER]: KILL_CHARACTER,
	[actions.BRING_BACK_CHARACTER]: BRING_BACK_CHARACTER,
	[actions.UPDATE_CHARACTER]: UPDATE_CHARACTER
})
