import { expect } from 'chai';
import { fromJS } from 'immutable';

import reducers from './index';
import { actions } from 'Constants/characters';

import { Characters, Father, Mother, Child } from 'Fixtures/characters/index';

describe('characters reducers', () => {
	describe('default', () => {
		it('should return default state', () => {
			const action = {
				type: 'TEST'
			};
			expect(reducers(undefined, action)).to.eql([]);
		});
	});

	describe('CREATE_CHARACTER', () => {
		it('should return new state', () => {
			const action = {
				type: actions.CREATE_CHARACTER,
				data: Father
			};
			expect(reducers(undefined, action)).to.eql([Father]);
		});
	});

	describe('REMOVE_CHARACTER', () => {
		it('should return new state', () => {
			const action = {
				type: actions.REMOVE_CHARACTER,
				data: Father
			};
			expect(reducers(Characters, action)).to.eql([Mother, Child]);
		});
	});

	describe('KILL_CHARACTER', () => {
		it('should return new state', () => {
			const action = {
				type: actions.KILL_CHARACTER,
				data: Child
			};
			const expectation = fromJS(Child).set('isAlive', false).toJS();
			expect(reducers(Characters, action)[2]).to.eql(expectation);
		});
	});

	describe('BRING_BACK_CHARACTER', () => {
		it('should return new state', () => {
			const action = {
				type: actions.BRING_BACK_CHARACTER,
				data: Father
			};
			const expectation = fromJS(Father).set('isAlive', true).toJS();
			expect(reducers(Characters, action)[0]).to.eql(expectation);
		});
	});
});
