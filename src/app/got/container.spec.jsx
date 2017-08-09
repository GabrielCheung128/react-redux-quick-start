import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import sinon, { assert } from "sinon";

import { CharactersContainer as Container } from './container';

import { Characters } from 'Fixtures/characters';
import { Houses } from 'Fixtures/houses';

describe("<Characters>", ()=>{
	let wrapper;

	const props = {
		characters: Characters,
		houses: Houses,
		actions: {
			characterList: {
				createCharacter: sinon.spy(),
				removeCharacter: sinon.spy(),
				updateCharacter: sinon.spy()
			}
		}
	};

	beforeEach(() => {
		wrapper = shallow(<Container {...props} />);
	});

	describe('rendering', () => {
		it('<CharacterList /> component', () => {
			expect(wrapper.find('Connect(CharacterList)').length).to.eqls(1);
		})
	});
});