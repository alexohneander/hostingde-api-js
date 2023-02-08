import { DNSRecord } from './record';
import { ZoneConfig } from './zone_config';

export type Zone = {
	zoneConfig?: ZoneConfig;
	records?: Array<DNSRecord>;
};
