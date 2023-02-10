import { ResponseError } from '../../error';
import { DNSRecord } from '../record';
import { ZoneConfig } from '../zone_config';

export type CreateZoneResult = {
	response: {
		zoneConfig: ZoneConfig;
		records: DNSRecord[];
	};
	status: string;
	errors: [ResponseError];
};
