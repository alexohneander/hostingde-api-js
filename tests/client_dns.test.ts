import { ClientDNS } from '../src';
import { Filter } from '../src/types/filter';
import { expect } from 'chai';

require('dotenv').config();

const Token: string = process.env['TOKEN'] as string;
const Url: string = process.env['URL'] as string;

describe('hosting.de SDK DNS Client', () => {
	it('Constructs without throwing', () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		new ClientDNS(url, token, limit);
	});

	it("FindZones and get status 'success'", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);
		let result = await client.FindZones();

		expect(result.status).to.equal('success');
	});

	it("FindZones without Token and get status 'error'", async () => {
		let url = Url;
		let token = '';
		let limit = 10;

		const client = new ClientDNS(url, token, limit);
		let result = await client.FindZones();

		expect(result.status).to.equal('error');
		expect(result.errors[0].code).to.equal(11002);
	});

	it("FindZoneConfigs and get status 'success'", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);
		let result = await client.FindZoneConfigs();

		expect(result.status).to.equal('success');
	});

	it("FindRecords, get status 'success' and get a valid DNSRecord Object", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);

		let result = await client.FindRecords();

		expect(result.status).to.equal('success');

		// DNSRecord Object
		expect(result.response.data[0]).to.have.property('accountId');
		expect(result.response.data[0]).to.have.property('addDate');
		expect(result.response.data[0]).to.have.property('content');
		expect(result.response.data[0]).to.have.property('id');
		expect(result.response.data[0]).to.have.property('lastChangeDate');
		expect(result.response.data[0]).to.have.property('name');
		expect(result.response.data[0]).to.have.property('ttl');
		expect(result.response.data[0]).to.have.property('type');
		expect(result.response.data[0]).to.have.property('zoneConfigId');
	});

	it("FindRecords, get status 'success' and filter for A-Records", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);

		let filter:Filter = {
			field:'recordType',
			value: 'A'
		}
		let result = await client.FindRecords(filter);

		expect(result.status).to.equal('success');
		expect(result.response.data[0].type).to.equal('A');
	});
});
