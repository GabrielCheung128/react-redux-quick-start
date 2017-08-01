import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import jQuery from "jquery"

import * as client from "./index";
import { Father } from 'Fixtures/characters';

chai.use(sinonChai);

describe("client", () => {
	beforeEach(() => {
		sinon.stub(jQuery, "ajax").returns({
			done: () => {}
		})
	});

	afterEach(() => {
		jQuery.ajax.restore()
	});

	describe('post', () => {
		it('should have correct request', () => {
			client.post('/test', Father);
			expect(jQuery.ajax).to.have.been.calledWithMatch({
				method: 'POST',
				uri: 'http://localhost:3000/test',
				data: Father,
				json: true,
				header: {
					Accept: "application/json",
					"Content-Type": "application/json"
				}
			});
		});
	});

	describe('fetch', () => {
		it('should have correct request', () => {
			client.fetch('/test', {query: 'testquery'});
			expect(jQuery.ajax).to.have.been.calledWithMatch({
				method: 'GET',
				uri: 'http://localhost:3000/test?query=testquery',
				json: true,
				header: {
					Accept: "application/json",
					"Content-Type": "application/json"
				}
			});
		});
	});

	describe('update', () => {
		it('should have correct request', () => {
			client.update('/test', Father);
			expect(jQuery.ajax).to.have.been.calledWithMatch({
				method: 'PUT',
				uri: 'http://localhost:3000/test',
				data: Father,
				json: true,
				header: {
					Accept: "application/json",
					"Content-Type": "application/json"
				}
			});
		});
	});

	describe('destroy', () => {
		it('should have correct request', () => {
			client.destroy('/test', Father);
			expect(jQuery.ajax).to.have.been.calledWithMatch({
				method: 'DELETE',
				uri: 'http://localhost:3000/test',
				header: {
					Accept: "application/json",
					"Content-Type": "application/json"
				}
			});
		});
	});
});