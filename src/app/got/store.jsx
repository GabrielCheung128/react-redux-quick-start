import { combineReducers } from 'redux';
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";

import { initState as initCharacters, default as characters } from 'Reducers/characters';
import { initState as initHouses, default as houses } from 'Reducers/houses';

const mapPropsToInitState = (initData) => {
	return {
		characters: initData.characters || initCharacters,
		houses: initData.houses || initHouses,
	}
};

export default function storeCreator(props) {
	const middlewares = [thunk];

	const createStoreWrapper = compose(
		applyMiddleware(...middlewares)
	)(createStore);

	const reducers = combineReducers({
		characters, houses
	});

	const initData = mapPropsToInitState(props);

	return createStoreWrapper(reducers, initData);
}
