# Hosting.de SDK for JavaScript
A simple and easy to use client for the Hosting.de API

## Installation
```bash
npm i hostingde-api-js
```

## Usage
Import and initialize a client using an access token
```js
const { ClientDNS } = require("hostingde-api-js")

// Initializing a client
 let url = "https://secure.hosting.de/api",
    token = "TOKEN",
    limit = 10;
const client = new ClientDNS(url, token, limit)

```