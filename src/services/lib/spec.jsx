import { expect } from 'chai';
import { getBasicUrl, getRequestHeader } from './index';

describe('service lib', () => {
	describe('getBasicUrl', () => {
		it('should return correct base request url', () => {
			expect(getBasicUrl()).to.eqls('http://localhost:3000');
		})
	});

	describe('getBasicUrl', () => {
		it('should return correct base request url', () => {
			expect(getRequestHeader()).to.eqls({
				Accept: "application/json",
				"Content-Type": "application/json"
			});
		})
	});
});