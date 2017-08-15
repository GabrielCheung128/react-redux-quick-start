import React from 'react';
import { mount, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import { CharacterItem, CharacterItemWithEdit } from './index';

import { Father } from 'Fixtures/characters';
import { Houses } from 'Fixtures/houses';

describe('CharacterItem', () => {
	const defaultProps = {
		houses: Houses,
	};

	const subject = (props) => {
		const combinedProps = Object.assign({}, defaultProps, Father, props);
		return mount(
			<CharacterItem {...combinedProps}/>
		)
	};

	describe('rendering', () => {
		it('should have inputs', () => {
			const component = subject({edit: () => {}, delete: () => {}});
			expect(component.find('span').at(0).text()).to.eqls(Father.firstName);
			expect(component.find('span').at(1).text()).to.eqls(Father.lastName);
			expect(component.find('span').at(2).text()).to.eqls(Father.gender);
			expect(component.find('span').at(3).text()).to.eqls('Stark');
			expect(component.find('span').at(4).text()).to.eqls('Gone');
		});
	});

	describe('edit', () => {
		it('should call edit when button is clicked', () => {
			const spy = sinon.spy();
			const component = subject({edit: spy, delete: () => {}});
			component.find('button').at(0).simulate('click');
			expect(spy).to.have.callCount(1);
		});
	});

	describe('delete', () => {
		it('should call delete when button is clicked', () => {
			const spy = sinon.spy();
			const component = subject({edit: () => {}, delete: spy });
			component.find('button').at(1).simulate('click');
			expect(spy).to.have.callCount(1);
		});
	});
});

describe('CharacterItemWithEdit', () => {
	const defaultProps = {
		houses: Houses,
		actions: {
			removeCharacter: sinon.spy()
		}
	};

	const subject = (props) => {
		const combinedProps = Object.assign({}, defaultProps, Father, props);
		return mount(
			<CharacterItemWithEdit {...combinedProps}/>
		);
	};

	describe('CharacterItem component', () => {
		it('should have component when it is not edit mode', () => {
			const component = subject({edit: () => {}, delete: () => {}});
			expect(component.find('CharacterItem').length).to.eqls(1);

		});
	});

	describe('CreateCharacter component', () => {
		it('should have component when it is edit mode', () => {
			const component = subject();
			component.find('CharacterItem button').at(0).simulate('click', {});
			expect(component.find('CreateCharacter').length).to.eqls(1);
		});

		it('should show CharacterItem component when it is edit mode is done', () => {
			const component = subject();
			component.find('CharacterItem button').at(0).simulate('click', {});
			expect(component.find('CreateCharacter').length).to.eqls(1);
			component.find('CreateCharacter form').at(0).simulate('submit');
			expect(component.find('CharacterItem').length).to.eqls(1);
		});
	})

});