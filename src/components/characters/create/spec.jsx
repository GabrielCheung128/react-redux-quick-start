import React from 'react';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import { CreateCharacter } from './index';
import { Houses } from 'Fixtures/houses';

describe('CreateCharacter', () => {
	const defaultProps = {
		houses: Houses
	};

	const subject = (props) => {
		const combinedProps = Object.assign({}, defaultProps, props);
		return mount(
			<CreateCharacter {...combinedProps}/>
		)
	};

	describe('rendering', () => {
		it('should have inputs', () => {
			const spy = sinon.spy();
			const component = subject({createCharacter: spy});
			expect(component.find('[name="firstName"]').length).to.eqls(1);
			expect(component.find('[name="lastName"]').length).to.eqls(1);
			expect(component.find('[name="gender"]').length).to.eqls(2);
			expect(component.find('select').length).to.eqls(1);
			expect(component.find('[type="submit"]').length).to.eqls(1);
		});
	});

	describe('submit form', () => {
		it('should call createCharacter when submit', () => {
			const spy = sinon.spy();
			const component = subject({createCharacter: spy});
			component.find('form').simulate('submit');
			expect(spy).to.have.callCount(1);
		});
	});
});