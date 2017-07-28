import React from 'react';
import { mount} from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
chai.use(sinonChai);

describe('test', () => {
    it('test input', () => {
        const spy = sinon.spy();
        const view = mount(<input type="text" onChange={spy}/>);
        view.find('input').simulate('change', { target: { value: 'test' } });
        expect(spy).to.have.been.calledOnce;
    })
});