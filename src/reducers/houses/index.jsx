import { fromJS } from 'immutable';
import { createReducer } from 'redux-create-reducer';

import { actions } from 'Constants/houses';

export const initState = fromJS([]);

function INIT_HOUSES(state, action) {
	return state.clear().push(...action.data);
}

export default createReducer(initState, {
	[actions.INIT_HOUSES]: INIT_HOUSES
})
