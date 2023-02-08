import { ClientDNS } from "../src"
import { expect } from "chai";

require('dotenv').config();

const Token:string = (process.env['TOKEN'] as string);
const Url:string = (process.env['URL'] as string);

describe("hosting.de SDK DNS Client", () => {
    it("Constructs without throwing", () => {
        let url = Url,
            token = Token,
            limit = 10;
        new ClientDNS(url, token, limit)
    })

    it("FindZones and get status 'success'", async () => {
        let url = Url,
            token = Token,
            limit = 10;
        const client = new ClientDNS(url, token, limit)
        let result = await client.FindZones();
        
        expect(result.status).to.equal('success');
    })

    it("FindZones without Token and get status 'error'", async () => {
        let url = Url,
            token = '',
            limit = 10;
        const client = new ClientDNS(url, token, limit)
        let result = await client.FindZones();

        expect(result.status).to.equal('error');
        expect(result.errors[0].code).to.equal(11002);
    })

    it("FindZoneConfigs and get status 'success'", async () => {
        let url = Url,
            token = Token,
            limit = 10;
        const client = new ClientDNS(url, token, limit)
        let result = await client.FindZoneConfigs();

        expect(result.status).to.equal('success');
    })
})