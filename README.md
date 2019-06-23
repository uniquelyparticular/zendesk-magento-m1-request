# @particular./zendesk-magento-m1-request

[![npm version](https://img.shields.io/npm/v/@particular./zendesk-magento-m1-request.svg)](https://www.npmjs.com/package/@particular./zendesk-magento-m1-request) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![CircleCI](https://img.shields.io/circleci/project/github/uniquelyparticular/zendesk-magento-m1-request.svg?label=circleci)](https://circleci.com/gh/uniquelyparticular/zendesk-magento-m1-request)
![dependency status: david](https://img.shields.io/david/uniquelyparticular/zendesk-magento-m1-request.svg)

> 🎮 Minimal [Magento m1](https://devdocs.magento.com/guides/m1x/install/installing_install.html) API request library for Node (design for use w/ [Zendesk Extension](https://github.com/zendesk/magento_extension))

## Installation

```bash
yarn add @particular./zendesk-magento-m1-request # npm install @particular./zendesk-magento-m1-request
```

## Quickstart (OAuth)

```js
const { createClient } = require('@particular./zendesk-magento-m1-request');
// import { createClient } from '@particular./zendesk-magento-m1-request'

const magentoM1 = new createClient({
  store_url: 'https://.../...', //Magento m1 Store URL
  access_token: '...' //Access token generated after installing/configuring Zendesk extension
});

magentoM1
  .get(`zendesk/api/customers/${email}`)
  .then(console.log)
  .catch(console.error);
```

## Custom headers per request

The API provides you the ability to send various request headers that change the way data is stored or retrieved.

By default this library will encode all data as JSON, however you can customise this by setting your own `Content-Type` header as an additional argument to `get`, `patch`, `post`, `put` and `delete`.

**Note**: If you add the `Content-Type` custom header to `patch`, `post`, `put` or `delete` you will need to encode `data` yourself.

```js
const magentoM1 = new createClient({
  store_url: 'https://.../...', //Magento m1 Store URL
  access_token: '...' //Access token generated after installing/configuring Zendesk extension
});

const headers = {
  'X-My-Header': 'custom'
};

magentoM1
  .get(`zendesk/api/customers/${email}`, headers)
  .then(console.log)
  .catch(console.error);
```

_Contact [Adam Grohs](https://www.linkedin.com/in/adamgrohs/) @ [Particular.](https://uniquelyparticular.com) for any questions._
