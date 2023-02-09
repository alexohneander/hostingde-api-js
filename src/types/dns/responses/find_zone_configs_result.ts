import { ResponseError } from '../../error';
import { ZoneConfig } from '../zone_config';

export type FindZoneConfigsResult = {
	response: {
		data: [ZoneConfig];
		limit: number;
		page: number;
		totalEntries: number;
		totalPages: number;
		type: string;
	};
	status: string;
	errors: [ResponseError];
};
