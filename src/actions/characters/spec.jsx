import $ from 'jquery';
import { expect } from 'chai';
import sinon from 'sinon';
import { actions } from 'Constants/characters';

import * as services from 'Services/characters';
import * as characterActions from './index';
import { Characters, Father, Mother, Child } from 'Fixtures/characters';

describe('character actions', () => {
	let dispatchSpy, getStateSpy, mockPromise;

	describe('create a character', () => {
		beforeEach(() => {
			dispatchSpy = sinon.spy();
			getStateSpy = sinon.stub().returns(Father);
			mockPromise = $.Deferred();
			sinon.stub(services, 'post').returns(mockPromise);
			characterActions.create(Father)(dispatchSpy, getStateSpy)
		});

		afterEach(() => {
			services.post.restore();
		});

		it(`should dispatch a ${actions.CREATE_CHARACTER} event`, () => {
			mockPromise.resolve(Father);
			sinon.assert.calledWith(dispatchSpy, {
				type: actions.CREATE_CHARACTER,
				data: Father
			});
		})
	});

	describe('remove a character', () => {
		beforeEach(() => {
			dispatchSpy = sinon.spy();
			getStateSpy = sinon.stub().returns(Father);
			mockPromise = $.Deferred();
			sinon.stub(services, 'destroy').returns(mockPromise);
			characterActions.remove(Father)(dispatchSpy, getStateSpy)
		});

		afterEach(() => {
			services.destroy.restore();
		});

		it(`should dispatch a ${actions.REMOVE_CHARACTER} event`, () => {
			mockPromise.resolve({});
			sinon.assert.calledWith(dispatchSpy, {
				type: actions.REMOVE_CHARACTER,
				data: Father
			});
		})
	});

	describe('kill a character', () => {
		beforeEach(() => {
			dispatchSpy = sinon.spy();
			getStateSpy = sinon.stub().returns(Father);
			mockPromise = $.Deferred();
			sinon.stub(services, 'update').returns(mockPromise);
			characterActions.kill(Father)(dispatchSpy, getStateSpy)
		});

		afterEach(() => {
			services.update.restore();
		});

		it(`should dispatch a ${actions.KILL_CHARACTER} event`, () => {
			mockPromise.resolve(Father);
			sinon.assert.calledWith(dispatchSpy, {
				type: actions.KILL_CHARACTER,
				data: Father
			});
		})
	});

	describe('rebirth a character', () => {
		beforeEach(() => {
			dispatchSpy = sinon.spy();
			getStateSpy = sinon.stub().returns(Father);
			mockPromise = $.Deferred();
			sinon.stub(services, 'update').returns(mockPromise);
			characterActions.rebirth(Father)(dispatchSpy, getStateSpy)
		});

		afterEach(() => {
			services.update.restore();
		});

		it(`should dispatch a ${actions.BRING_BACK_CHARACTER} event`, () => {
			mockPromise.resolve(Father);
			sinon.assert.calledWith(dispatchSpy, {
				type: actions.BRING_BACK_CHARACTER,
				data: Father
			});
		})
	});
});