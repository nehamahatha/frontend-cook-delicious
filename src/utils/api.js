const API = "http://neha-kumari-api.herokuapp.com";

export default class Api {
	static get(url) {
		return fetch(API+url, {
	     	method: "GET",
	     	headers: {
	       		"Content-Type": "application/json"
     		}
     	});
	}

	static post(url, body) {
		return fetch(API+url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: body
		});
	}
}
