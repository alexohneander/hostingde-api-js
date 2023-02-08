import { Client } from "../src"
import { expect } from "chai";

describe("hosting.de SDK Client", () => {
    it("Constructs without throwing", () => {
        let url = 'https://test.de',
            token = '',
            limit = 10;
      new Client(url, token, limit)
    })
})