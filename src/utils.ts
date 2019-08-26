export function removeLeadingSlash(string: string) {
  return string.replace(/^\/+/, '');
}

export function removeTrailingSlash(string: string) {
  return string.replace(/\/$/, '');
}
