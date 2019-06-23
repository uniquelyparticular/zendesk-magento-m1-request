export interface InitOptions {
  access_token: string;
  store_url: string;
  store_code?: string;
  currency?: string;
  fetch?: Fetch;
  application?: string;
  headers?: Headers;
}

export interface Options {
  store_url: string;
  store_code?: string;
  currency?: string;
  fetch?: Fetch;
  application?: string;
  headers?: Headers;
}

export interface Headers {
  [key: string]: string;
}

export interface Fetch {
  (input?: Request | string, init?: RequestInit): Promise<Response>;
}
