import { expect } from 'chai';

import reducers from './index';
import { actions } from 'Constants/houses';

import { Houses } from 'Fixtures/houses/index';

describe('houses reducers', () => {
	describe('default', () => {
		it('should return default state', () => {
			const action = {
				type: 'TEST'
			};
			expect(reducers(undefined, action).toJS()).to.eql([]);
		});
	});

	describe('INIT_HOUSES', () => {
		it('should return new state', () => {
			const action = {
				type: actions.INIT_HOUSES,
				data: Houses
			};
			expect(reducers(undefined, action).toJS()).to.eqls(Houses);
		});
	});
});
