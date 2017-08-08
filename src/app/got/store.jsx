import { Record, Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";

import { default as characters } from 'Reducers/characters';
import { default as houses } from 'Reducers/houses';

export default function storeCreator(props) {
	const middlewares = [thunk];

	const createStoreWrapper = compose(
		applyMiddleware(...middlewares)
	)(createStore);

	const reducers = combineReducers({
		characters, houses
	}, Record(props));

	return createStoreWrapper(reducers, Map(props));
}
