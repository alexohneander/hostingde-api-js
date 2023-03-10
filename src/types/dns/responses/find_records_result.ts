import { ResponseError } from '../../error';
import { DNSRecord } from '../record';

export type FindRecordsResult = {
	response: {
		data: [DNSRecord];
		limit: number;
		page: number;
		totalEntries: number;
		totalPages: number;
		type: string;
	};
	status: string;
	errors: [ResponseError];
};
