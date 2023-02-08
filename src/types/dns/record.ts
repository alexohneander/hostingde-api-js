export type DNSRecord = {
	id: string;
	zoneId?: string;
	recordTemplateId?: string;
	name: string;
	type: string;
	content: string;
	ttl?: number;
	priority?: number;
	lastChangeDate?: Date;
};
