import { ClientDNS } from '../src';
import { Filter } from '../src/types/filter';
import { expect } from 'chai';
import { Template } from '../src/types/dns/template';
import { RecordTemplate } from '../src/types/dns/record_template';

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

		let filter: Filter = {
			field: 'recordType',
			value: 'A',
		};
		let result = await client.FindRecords(filter);

		expect(result.status).to.equal('success');
		expect(result.response.data[0].type).to.equal('A');
	});

	it("CreateTemplate, get status 'success' and get a valid Template Object", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);

		let template: Template = {
			name: 'default-loadbalancing',
		};

		let records: RecordTemplate[] = [
			{
				name: '##DOMAIN##',
				type: 'A',
				content: '10.0.0.148',
				ttl: 3600,
			},
			{
				name: '##DOMAIN##',
				type: 'A',
				content: '10.0.0.147',
				ttl: 3600,
			},
			{
				name: 'mail.##DOMAIN##',
				type: 'A',
				content: '10.0.0.150',
				ttl: 10000,
				priority: 10,
			},
		];

		let result = await client.CreateTemplate(template, records);

		expect(result.status).to.equal('success');
		expect(result.response).to.have.property('name');
		expect(result.response).to.have.property('accountId');
		expect(result.response).to.have.property('id');
	});

	it("DeleteTemplate, get status 'success'", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);	
		const findRes = await client.FindTemplates();
		const defaultTemplate: Template = findRes.response.data[0];

		if (defaultTemplate.id != null){
			let result = await client.DeleteTemplate(defaultTemplate.id);
			expect(result.status).to.equal('success');
		} 
	
	});
});
