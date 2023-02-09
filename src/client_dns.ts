import Client from './client';
import { PostRequest } from './helpers/http';
import { ClientRequest } from './types/request';
import { Filter } from './types/filter';
import { Sort } from './types/sort';
import { FindRecordsResult } from './types/dns/responses/find_records_result';
import { FindZoneConfigsResult } from './types/dns/responses/find_zone_configs_result';
import { FindZonesResult } from './types/dns/responses/find_zones_result';

export default class ClientDNS extends Client {
	Location: string = `${this.Url}/dns/v1/json`;

	constructor(url: string, token: string, limit: number) {
		super(url, token, limit);
	}

	public async FindZoneConfigs(filter?: Filter, limit: number = 50, page: number = 1, sort?: Sort) {
		const req: ClientRequest = {
			authToken: this.Token,
			limit: limit,
			page: page,
			filter: filter,
			sort: sort,
		};

		const res: FindZoneConfigsResult = await PostRequest(req, `${this.Location}/zoneConfigsFind`);
		return res;
	}

	public async FindZones(filter?: Filter, limit: number = 50, page: number = 1, sort?: Sort) {
		const req: ClientRequest = {
			authToken: this.Token,
			limit: limit,
			page: page,
			filter: filter,
			sort: sort,
		};

		const res: FindZonesResult = await PostRequest(req, `${this.Location}/zonesFind`);
		return res;
	}

	public async FindRecords(filter?: Filter, limit: number = 10, page: number = 1, sort?: Sort) {
		const req: ClientRequest = {
			authToken: this.Token,
			limit: limit,
			page: page,
			filter: filter,
			sort: sort,
		};

		const res: FindRecordsResult = await PostRequest(req, `${this.Location}/recordsFind`);
		return res;
	}

	// public CreateZones() {}

	// public RecreateZone() {}

	// public UpdateZone() {}

	// public DeleteZone() {}
}
