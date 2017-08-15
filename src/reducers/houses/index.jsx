import { fromJS } from 'immutable';
import { createReducer } from 'redux-create-reducer';

import { actions } from 'Constants/houses';

export const initState = [];

function INIT_HOUSES(state, action) {
	const houses = fromJS(state);
	return houses.clear().push(...action.data).toJS();
}

export default createReducer(initState, {
	[actions.INIT_HOUSES]: INIT_HOUSES
})
