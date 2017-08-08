import React from 'react';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import storeCreator from './store';

import { Characters } from 'Fixtures/characters';
import { Houses } from 'Fixtures/houses';

describe('init store', () => {
	const initData = {
		characters: Characters,
		houses: Houses
	};

	it('should init with correct init data', () => {
		expect(storeCreator(initData).getState().toJS()).to.eqls(initData);
	});
});