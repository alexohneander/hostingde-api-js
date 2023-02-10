import { ClientDNS } from '../src';
import { Filter } from '../src/types/filter';
import { expect } from 'chai';
import { Template } from '../src/types/dns/template';
import { RecordTemplate } from '../src/types/dns/record_template';
import { ZoneConfig } from '../src/types/dns/zone_config';
import { DNSRecord } from '../src/types/dns/record';
import { Zone } from '../src/types/dns/zone';

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

	it("CreateZone, get not status 'error' and get a valid Zone Object", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);

		let zoneConfig: ZoneConfig = {
			name: 'test.de',
			type: 'NATIVE',
			emailAddress: 'admin@test.de',
		};

		let records: DNSRecord[] = [
			{
				name: 'www.test.de',
				type: 'A',
				content: '172.27.171.106',
				ttl: 86000,
			},
			{
				name: 'test.de',
				type: 'MX',
				content: 'smtp.test.de',
				ttl: 86000,
				priority: 0,
			},
		];

		let result = await client.CreateZone(zoneConfig, records, undefined, true);

		expect(result.status).to.not.equal('error');
		expect(result.response).to.have.property('zoneConfig');
		expect(result.response).to.have.property('records');
	});

	delay(1000);

	it("RecreateZone, get not status 'error' and get a valid Zone Object", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);

		let zoneConfig: ZoneConfig = {
			name: 'test.de',
			type: 'NATIVE',
			emailAddress: 'admin@test.de',
		};

		let records: DNSRecord[] = [
			{
				name: 'www.test.de',
				type: 'A',
				content: '172.0.0.106',
				ttl: 86000,
			},
			{
				name: 'test.de',
				type: 'MX',
				content: 'smtp.test.de',
				ttl: 86000,
				priority: 0,
			},
		];

		let result = await client.RecreateZone(zoneConfig, records, undefined, true);

		expect(result.status).to.not.equal('error');
		expect(result.response).to.have.property('zoneConfig');
		expect(result.response).to.have.property('records');
	});

	delay(1000);

	it("UpdateZone, get not status 'error' and get a valid Zone Object", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);

		let zoneConfig: ZoneConfig = {
			name: 'test.de',
			type: 'NATIVE',
			emailAddress: 'admin@test.de',
			dnsSecMode: 'off',
		};

		let recordsToAdd: DNSRecord[] = [
			{
				name: 'update.test.de',
				type: 'A',
				content: '172.0.0.106',
				ttl: 86000,
			},
		];

		let result = await client.UpdateZone(zoneConfig, recordsToAdd);

		expect(result.status).to.not.equal('error');
		expect(result.response).to.have.property('zoneConfig');
		expect(result.response).to.have.property('records');
	});

	delay(1000);

	it("DeleteZone, get not status 'error'", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);

		let filter: Filter = {
			field: 'zoneName',
			value: 'test.de',
		};

		const findRes = await client.FindZones(filter);
		const defaultZone: Zone = findRes.response.data[0];

		if (defaultZone.zoneConfig?.id != null) {
			let result = await client.DeleteZone(defaultZone.zoneConfig.id);
			expect(result.status).to.not.equal('error');
		}
	});

	delay(1000);

	it("RestoreZone, get not status 'error'", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);

		let filter: Filter = {
			field: 'zoneName',
			value: 'test.de',
		};

		const findRes = await client.FindZones(filter);
		const defaultZone: Zone = findRes.response.data[0];

		if (defaultZone.zoneConfig?.id != null) {
			let result = await client.RestoreZone(defaultZone.zoneConfig.id);
			expect(result.status).to.not.equal('error');
		}
	});

	delay(1000);

	it("DeleteZone, get not status 'error'", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);

		let filter: Filter = {
			field: 'zoneName',
			value: 'test.de',
		};

		const findRes = await client.FindZones(filter);
		const defaultZone: Zone = findRes.response.data[0];

		if (defaultZone.zoneConfig?.id != null) {
			let result = await client.DeleteZone(defaultZone.zoneConfig.id);
			expect(result.status).to.not.equal('error');
		}
	});

	delay(1000);

	it("PurgeRestorableZone, get not status 'error'", async () => {
		let url = Url;
		let token = Token;
		let limit = 10;

		const client = new ClientDNS(url, token, limit);

		let filter: Filter = {
			field: 'zoneName',
			value: 'test.de',
		};

		const findRes = await client.FindZones(filter);
		const defaultZone: Zone = findRes.response.data[0];

		if (defaultZone.zoneConfig?.id != null) {
			let result = await client.PurgeRestorableZone(defaultZone.zoneConfig.id);
			expect(result.status).to.not.equal('error');
		}
	});

	delay(1000);

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
			name: 'default-testing',
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

		let filter: Filter = {
			field: 'templateName',
			value: 'default-testing',
		};

		const findRes = await client.FindTemplates(filter);
		const defaultTemplate: Template = findRes.response.data[0];

		if (defaultTemplate.id != null) {
			let result = await client.DeleteTemplate(defaultTemplate.id);
			expect(result.status).to.equal('success');
		}
	});
});

function delay(interval) {
	return it('should delay', (done) => {
		setTimeout(() => done(), interval);
	}).timeout(interval + 100); // The extra 100ms should guarantee the test will not fail due to exceeded timeout
}
