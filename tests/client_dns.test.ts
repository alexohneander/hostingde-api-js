import { ClientDNS } from "../src"
import { expect } from "chai";

describe("hosting.de SDK DNS Client", () => {
    it("Constructs without throwing", () => {
        let url = '',
            token = '',
            limit = 10;
        new ClientDNS(url, token, limit)
    })
    it("Find Zones without throwing", async () => {
        let url = '',
            token = '',
            limit = 10;
        const client = new ClientDNS(url, token, limit)
        let result = await client.FindZones();
    })
    it("Find ZoneConfigs without throwing", async () => {
        let url = '',
            token = '',
            limit = 10;
        const client = new ClientDNS(url, token, limit)
        let result = await client.FindZoneConfigs();
    })
})