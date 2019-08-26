import fetch from 'cross-fetch';

import { InitOptions, Options, Headers, Fetch } from './types';
import { removeLeadingSlash, removeTrailingSlash } from './utils';

export class createClient {
  private access_token: string;
  private options?: Options;
  public fetch?: Fetch;

  constructor(options: InitOptions) {
    const { access_token, store_url, store_code, ...others } = options;
    this.access_token = access_token;
    this.fetch = options.fetch ? options.fetch : fetch;

    this.options = {
      store_url: removeTrailingSlash(store_url),
      store_code,
      ...others
    };
  }

  async request(
    method: string,
    path: string,
    data: object = undefined,
    requestHeaders: Headers = {}
  ) {
    const {
      options: {
        application,
        store_url,
        store_code,
        currency,
        headers: classHeaders
      }
    } = this;

    const version: string = store_code ? `/${store_code}` : '';
    const uri: string = `${store_url}${version}/index.php/${removeLeadingSlash(
      path
    )}`;
    // console.log('uri', uri);

    const customHeaders = {
      ...classHeaders,
      ...requestHeaders
    };

    const headers: Headers = {
      'Content-Type': 'application/json',
      authorization: `Token token="${this.access_token}"`,
      'X-API-KEY': this.access_token,
      'X-MAGENTO-M1-SDK-LANGUAGE': 'JS-REQUEST',
      ...(application && { 'X-MAGENTO-M1-APPLICATION': application }),
      ...(currency && { 'X-MAGENTO-M1-CURRENCY': currency }),
      ...customHeaders
    };

    const body = customHeaders['Content-Type']
      ? data
      : { body: JSON.stringify({ ...data }) };

    const response = await this.fetch(uri, {
      method,
      headers,
      ...(data && body)
    });

    if (response.status === 204) return response.text();

    if (response.status >= 400)
      throw {
        statusCode: response.status,
        body: {
          message: response.statusText
        }
      };

    const json = await response.json();

    if (!response.ok) {
      throw {
        statusCode: response.status,
        ...json
      };
    }

    return json;
  }

  post(path: string, data: object, headers?: Headers) {
    return this.request('POST', path, data, headers);
  }

  get(path: string, headers?: Headers) {
    return this.request('GET', path, undefined, headers);
  }

  patch(path: string, data: object, headers?: Headers) {
    return this.request('PATCH', path, data, headers);
  }

  put(path: string, data: object, headers?: Headers) {
    return this.request('PUT', path, data, headers);
  }

  delete(path: string, data: object, headers?: Headers) {
    return this.request('DELETE', path, data, headers);
  }
}
