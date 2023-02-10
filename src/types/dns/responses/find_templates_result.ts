import { ResponseError } from '../../error';
import { DNSRecord } from '../record';
import { Template } from '../template';

export type FindTemplatesResult = {
	response: {
		data: Template[];
		limit: number;
		page: number;
		totalEntries: number;
		totalPages: number;
		type: string;
	};
	status: string;
	errors: [ResponseError];
};
