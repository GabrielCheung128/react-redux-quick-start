import React from 'react';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import { CharacterList } from './index';

import { Characters } from 'Fixtures/characters';
import { Houses } from 'Fixtures/houses';

describe('CharacterList', () => {
	const defaultProps = {
		houses: Houses,
		characters: Characters
	};

	const subject = (props) => {
		const combinedProps = Object.assign({}, defaultProps, props);
		return mount(
			<CharacterList {...combinedProps}/>
		);
	};

	describe('rendering', () => {
		it('should display list', () => {
			const component = subject();
			expect(component.find('CharacterItemWithEdit').length).to.eqls(Characters.length);
		});

		it('should display create form', () => {
			const component = subject();
			expect(component.find('CreateCharacter').length).to.eqls(1);
		});
	});
});
