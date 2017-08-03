import { actions } from 'Constants/characters';
import * as services from 'Services/characters';

export function create(character) {
	return (dispatch, getState) => {
		return services.post('/character', character).done((response) => {
			dispatch({
				type: actions.CREATE_CHARACTER,
				data: response
			});
		});
	}
}

export function remove(character) {
	return (dispatch, getState) => {
		return services.destroy(`/character/${character.id}`).done((response) => {
			dispatch({
				type: actions.REMOVE_CHARACTER,
				data: response
			});
		});
	}
}

export function kill(character) {
	return (dispatch, getState) => {
		return services.update(`/character/${character.id}`, character).done((response) => {
			dispatch({
				type: actions.KILL_CHARACTER,
				data: response
			});
		});
	}
}

export function rebirth(character) {
	return (dispatch, getState) => {
		return services.update(`/character/${character.id}`, character).done((response) => {
			dispatch({
				type: actions.BRING_BACK_CHARACTER,
				data: response
			});
		});
	}
}