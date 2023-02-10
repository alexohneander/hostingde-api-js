import { SOAValues } from './soa_values';
import { TemplateValues } from './template_values';

export type ZoneConfig = {
	id?: string;
	accountId?: string;
	dnsServerGroupId?: string;
	status?: string;
	name: string;
	nameUnicode?: string;
	masterIp?: string;
	type: string;
	emailAddress?: string;
	zoneTransferWhitelist?: string[];
	lastChangeDate?: Date;
	soaValues?: SOAValues;
	templateValues?: TemplateValues;
	dnsSecMode?: string;
};
