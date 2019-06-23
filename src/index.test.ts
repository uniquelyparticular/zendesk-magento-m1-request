import { expect } from 'chai';
import fetch from 'fetch-everywhere';
import { createClient } from './index';

describe('Magento m1 index', () => {
  it('fetch can be overridden', () => {
    const magentoM1 = new createClient({
      store_url: 'http://localhost/magento',
      access_token: 'XXX',
      fetch: fetch
    });
    expect(magentoM1.fetch).to.be.an.instanceof(Function);
  });
});
