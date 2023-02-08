import { SOAValues } from './soa_values';
import { TemplateValues } from './template_values';

export type ZoneConfig = {
	id: string;
	accountId?: string;
	dnsServerGroupId?: string;
	status?: string;
	name: string;
	nameUnicode?: string;
	masterIp?: string;
	type: string;
	emailAddress?: string;
	zoneTransferWhitelist?: Array<string>;
	lastChangeDate?: Date;
	soaValues?: SOAValues; // TODO: Richtigen Datentypen anlegen
	templateValues?: TemplateValues; // TODO: Richtigen Datentypen anlegen
	dnsSecMode?: string;
};
