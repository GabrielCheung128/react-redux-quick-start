import * as queryString from 'query-string';
import $ from "jquery";
import { getBasicUrl, getRequestHeader } from 'Services/lib';

export function post(route, data) {
	return $.ajax({
		method: 'POST',
		uri: `${getBasicUrl()}${route}`,
		data: data,
		json: true,
		header: getRequestHeader()
	})
}

export function fetch(route, queryObject = {}) {
	return $.ajax({
		method: 'GET',
		uri: `${getBasicUrl()}${route}?${queryString.stringify(queryObject)}`,
		header: getRequestHeader(),
		json: true,
	})
}

export function update(route, data) {
	return $.ajax({
		method: 'PUT',
		uri: `${getBasicUrl()}${route}`,
		data: data,
		json: true,
		header: getRequestHeader()
	})
}

export function destroy(route, character){
	return $.ajax({
		method: 'DELETE',
		uri: `${getBasicUrl()}${route}`,
		header: getRequestHeader()
	})
}