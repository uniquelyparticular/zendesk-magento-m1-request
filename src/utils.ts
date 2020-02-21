export const ensureString = (string: string) => (string ? `${string}` : '');

export const removeLeadingSlash = (string: string) => {
  return ensureString(string).replace(/^\/+/, '');
};

export const removeTrailingSlash = (string: string) => {
  return ensureString(string).replace(/\/$/, '');
};
