import { ResponseError } from '../../error';
import { DNSRecord } from '../record';

export type CreateTemplateResult = {
	response: {
		id: string;
		accountId: string;
		name: string;
	};
	status: string;
	errors: [ResponseError];
};
