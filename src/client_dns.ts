import Client from './client';
import { PostRequest } from './helpers/http';
import { ClientRequest } from './types/request';
import { Filter } from './types/request_filter';
import { Sort } from './types/request_sort';

export default class ClientDNS extends Client {
	Location: string = `${this.Url}/dns/v1/json`;

	constructor(url: string, token: string, limit: number) {
		super(url, token, limit);
	}

	public async FindZoneConfigs(
		filter?: Filter,
		limit: number = 50,
		page: number = 1,
		sort?: Sort,
	) {
		const req: ClientRequest = {
			authToken: this.Token,
			limit: limit,
			page: page,
			filter: filter,
			sort: sort,
		};

		const res = await PostRequest(req, `${this.Location}/zoneConfigsFind`);
		return res;
	}

	public async FindZones(
		filter?: Filter,
		limit: number = 50,
		page: number = 1,
		sort?: Sort,
	) {
		const req: ClientRequest = {
			authToken: this.Token,
			limit: limit,
			page: page,
			filter: filter,
			sort: sort,
		};

		const res = await PostRequest(req, `${this.Location}/zonesFind`);
		return res;
	}

	public CreateZone() {}

	public RecreateZone() {}

	public UpdateZone() {}

	public DeleteZone() {}
}
