import { ClientRequest } from '../types/request';

export async function GetRequest(req: ClientRequest, endpoint: string) {
	try {
		const response = await fetch(endpoint, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		if (error instanceof Error) {
			console.log('error message: ', error.message);
			return error.message;
		} else {
			console.log('unexpected error: ', error);
			return 'An unexpected error occurred';
		}
	}
}

export async function PostRequest(req: ClientRequest, endpoint: string) {
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			body: JSON.stringify(req),
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		if (error instanceof Error) {
			console.log('error message: ', error.message);
			return error.message;
		} else {
			console.log('unexpected error: ', error);
			return 'An unexpected error occurred';
		}
	}
}
