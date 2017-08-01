import { ServiceConstants } from 'Constants/services';

export function getBasicUrl() {
	return ServiceConstants.BASE_URL;
}

export function getRequestHeader() {
	return {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
}

