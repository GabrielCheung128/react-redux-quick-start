import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeCreator from './store';
import { default as CharactersContainer } from './container';
import bindActions from "./actions";

//data for debug
import { Characters } from 'Fixtures/characters';
import { Houses } from 'Fixtures/houses';
const initData = {
	characters: Characters,
	houses: Houses
};

const store = storeCreator(initData);
const actions = bindActions(store.dispatch);
const id = 'app-container';

ReactDOM.render(
	<Provider store={store} >
			<CharactersContainer actions={actions}/>
	</Provider>,
	document.getElementById(id)
);