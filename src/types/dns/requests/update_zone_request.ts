import { DNSSecOptions } from '../dns_sec_options';
import { DNSRecord } from '../record';
import { ZoneConfig } from '../zone_config';

export type UpdateZoneRequest = {
	authToken: string;
	zoneConfig: ZoneConfig;
	recordsToAdd: DNSRecord[];
	recordsToModify: DNSRecord[];
	recordsToDelete: DNSRecord[];
	dnsSecOptions?: DNSSecOptions;
};
