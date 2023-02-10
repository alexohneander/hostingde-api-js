import { DNSSecOptions } from '../dns_sec_options';
import { DNSRecord } from '../record';
import { ZoneConfig } from '../zone_config';

export type CreateZoneRequest = {
	authToken: string;
	nameserverSetId?: string;
	useDefaultNameserverSet?: boolean;
	zoneConfig: ZoneConfig;
	records: DNSRecord[];
	dnsSecOptions?: DNSSecOptions;
};
