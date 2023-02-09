import { ResponseError } from '../../error';
import { Zone } from '../zone';

export type FindZonesResult = {
	response: {
		data: [Zone];
		limit: number;
		page: number;
		totalEntries: number;
		totalPages: number;
		type: string;
	};
	status: string;
	errors: [ResponseError];
};
