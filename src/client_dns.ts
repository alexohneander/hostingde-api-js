import Client from './client';
import { PostRequest } from './helpers/http';
import { DNSFindRequest } from './types/dns/requests/dns_find_request';
import { Filter } from './types/filter';
import { Sort } from './types/sort';
import { FindRecordsResult } from './types/dns/responses/find_records_result';
import { FindZoneConfigsResult } from './types/dns/responses/find_zone_configs_result';
import { FindZonesResult } from './types/dns/responses/find_zones_result';
import { Template } from './types/dns/template';
import { RecordTemplate } from './types/dns/record_template';
import { CreateTemplateRequest } from './types/dns/requests/create_template_request';
import { CreateTemplateResult } from './types/dns/responses/create_template_result';
import { FindTemplatesResult } from './types/dns/responses/find_templates_result';
import { ZoneConfig } from './types/dns/zone_config';
import { DNSRecord } from './types/dns/record';
import { DNSSecOptions } from './types/dns/dns_sec_options';
import { CreateZoneRequest } from './types/dns/requests/create_zone_request';
import { CreateZoneResult } from './types/dns/responses/create_zone_result';

export default class ClientDNS extends Client {
	Location: string = `${this.Url}/dns/v1/json`;

	constructor(url: string, token: string, limit: number) {
		super(url, token, limit);
	}

	// ZONES
	public async FindZones(filter?: Filter, limit: number = 50, page: number = 1, sort?: Sort) {
		const req: DNSFindRequest = {
			authToken: this.Token,
			limit: limit,
			page: page,
			filter: filter,
			sort: sort,
		};

		const res: FindZonesResult = await PostRequest(req, `${this.Location}/zonesFind`);
		return res;
	}

	public async CreateZone(
		zoneConfig: ZoneConfig,
		records: DNSRecord[],
		nameserverSetId?: string,
		useDefaultNameserverSet?: boolean,
		dnsSecOptions?: DNSSecOptions,
	) {
		const req: CreateZoneRequest = {
			authToken: this.Token,
			zoneConfig: zoneConfig,
			records: records,
			nameserverSetId: nameserverSetId,
			useDefaultNameserverSet: useDefaultNameserverSet,
			dnsSecOptions: dnsSecOptions,
		};

		const res: CreateZoneResult = await PostRequest(req, `${this.Location}/zoneCreate`);
		return res;
	}

	public async RecreateZone(
		zoneConfig: ZoneConfig,
		records: DNSRecord[],
		nameserverSetId?: string,
		useDefaultNameserverSet?: boolean,
		dnsSecOptions?: DNSSecOptions,
	) {
		const req: CreateZoneRequest = {
			authToken: this.Token,
			zoneConfig: zoneConfig,
			records: records,
			nameserverSetId: nameserverSetId,
			useDefaultNameserverSet: useDefaultNameserverSet,
			dnsSecOptions: dnsSecOptions,
		};

		const res: CreateZoneResult = await PostRequest(req, `${this.Location}/zoneRecreate`);
		return res;
	}

	// ZONECONFIGS
	public async FindZoneConfigs(filter?: Filter, limit: number = 50, page: number = 1, sort?: Sort) {
		const req: DNSFindRequest = {
			authToken: this.Token,
			limit: limit,
			page: page,
			filter: filter,
			sort: sort,
		};

		const res: FindZoneConfigsResult = await PostRequest(req, `${this.Location}/zoneConfigsFind`);
		return res;
	}

	// RECORDS
	public async FindRecords(filter?: Filter, limit: number = 10, page: number = 1, sort?: Sort) {
		const req: DNSFindRequest = {
			authToken: this.Token,
			limit: limit,
			page: page,
			filter: filter,
			sort: sort,
		};

		const res: FindRecordsResult = await PostRequest(req, `${this.Location}/recordsFind`);
		return res;
	}

	// TEMPLATES
	public async FindTemplates(filter?: Filter, limit: number = 10, page: number = 1, sort?: Sort) {
		const req: DNSFindRequest = {
			authToken: this.Token,
			limit: limit,
			page: page,
			filter: filter,
			sort: sort,
		};

		const res: FindTemplatesResult = await PostRequest(req, `${this.Location}/templatesFind`);
		return res;
	}

	public async CreateTemplate(dnsTemplate: Template, recordTemplates: RecordTemplate[]) {
		const req: CreateTemplateRequest = {
			authToken: this.Token,
			dnsTemplate: dnsTemplate,
			recordTemplates: recordTemplates,
		};

		const res: CreateTemplateResult = await PostRequest(req, `${this.Location}/templateCreate`);
		return res;
	}

	public async DeleteTemplate(templateId: string, templateName?: string) {
		const req = {
			authToken: this.Token,
			templateId: templateId,
			templateName: templateName,
		};

		const res = await PostRequest(req, `${this.Location}/templateDelete`);
		return res;
	}

	// public CreateZones() {}

	// public RecreateZone() {}

	// public UpdateZone() {}

	// public DeleteZone() {}
}
