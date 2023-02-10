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
import { Zone } from './types/dns/zone';
import { UpdateZoneRequest } from './types/dns/requests/update_zone_request';
import { DeleteZoneRequest } from './types/dns/requests/delete_zone_request';
import { RestoreZoneRequest } from './types/dns/requests/restore_zone_request';
import { PurgeRestorableZoneRequest } from './types/dns/requests/purge_restorable_zone_request';

export default class ClientDNS extends Client {
	Location: string = `${this.Url}/dns/v1/json`;

	constructor(url: string, token: string, limit: number) {
		super(url, token, limit);
	}

	// ZONES
	/**
	 *
	 * @param filter
	 * @param limit
	 * @param page
	 * @param sort
	 * @returns FindZonesResult
	 */
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

	/**
	 *
	 * @param zoneConfig
	 * @param records
	 * @param nameserverSetId
	 * @param useDefaultNameserverSet
	 * @param dnsSecOptions
	 * @returns CreateZoneResult
	 */
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

	/**
	 *
	 * @param zoneConfig
	 * @param records
	 * @param nameserverSetId
	 * @param useDefaultNameserverSet
	 * @param dnsSecOptions
	 * @returns CreateZoneResult
	 */
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

	/**
	 *
	 * @param zoneConfig
	 * @param recordsToAdd
	 * @param recordsToModify
	 * @param recordsToDelete
	 * @param dnsSecOptions
	 * @returns CreateZoneResult
	 */
	public async UpdateZone(
		zoneConfig: ZoneConfig,
		recordsToAdd: DNSRecord[] = [],
		recordsToModify: DNSRecord[] = [],
		recordsToDelete: DNSRecord[] = [],
		dnsSecOptions?: DNSSecOptions,
	) {
		const req: UpdateZoneRequest = {
			authToken: this.Token,
			zoneConfig: zoneConfig,
			recordsToAdd: recordsToAdd,
			recordsToModify: recordsToModify,
			recordsToDelete: recordsToDelete,
			dnsSecOptions: dnsSecOptions,
		};

		const res: CreateZoneResult = await PostRequest(req, `${this.Location}/zoneUpdate`);
		return res;
	}

	/**
	 *
	 * @param zoneConfigId
	 * @param zoneName
	 * @returns status
	 */
	public async DeleteZone(zoneConfigId?: string, zoneName?: string) {
		const req: DeleteZoneRequest = {
			authToken: this.Token,
			zoneConfigId: zoneConfigId,
			zoneName: zoneName,
		};

		const res = await PostRequest(req, `${this.Location}/zoneDelete`);
		return res;
	}

	/**
	 *
	 * @param zoneConfigId
	 * @param zoneName
	 * @returns status
	 */
	public async RestoreZone(zoneConfigId?: string, zoneName?: string) {
		const req: RestoreZoneRequest = {
			authToken: this.Token,
			zoneConfigId: zoneConfigId,
			zoneName: zoneName,
		};

		const res = await PostRequest(req, `${this.Location}/zoneRestore`);
		return res;
	}

	/**
	 *
	 * @param zoneConfigId
	 * @param zoneName
	 * @returns status
	 */
	public async PurgeRestorableZone(zoneConfigId?: string, zoneName?: string) {
		const req: PurgeRestorableZoneRequest = {
			authToken: this.Token,
			zoneConfigId: zoneConfigId,
			zoneName: zoneName,
		};

		const res = await PostRequest(req, `${this.Location}/zonePurgeRestorable`);
		return res;
	}

	// ZONECONFIGS
	/**
	 *
	 * @param filter
	 * @param limit
	 * @param page
	 * @param sort
	 * @returns FindZoneConfigsResult
	 */
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
	/**
	 *
	 * @param filter
	 * @param limit
	 * @param page
	 * @param sort
	 * @returns FindRecordsResult
	 */
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
	/**
	 *
	 * @param filter
	 * @param limit
	 * @param page
	 * @param sort
	 * @returns FindTemplatesResult
	 */
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

	/**
	 *
	 * @param dnsTemplate
	 * @param recordTemplates
	 * @returns CreateTemplateResult
	 */
	public async CreateTemplate(dnsTemplate: Template, recordTemplates: RecordTemplate[]) {
		const req: CreateTemplateRequest = {
			authToken: this.Token,
			dnsTemplate: dnsTemplate,
			recordTemplates: recordTemplates,
		};

		const res: CreateTemplateResult = await PostRequest(req, `${this.Location}/templateCreate`);
		return res;
	}

	// TODO: Add Response Type
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
