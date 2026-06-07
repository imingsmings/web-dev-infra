export function normalizePath(path) {
  if (!path || path === '/') {
    return '/';
  }

  const normalized = `/${path}`.replace(/\/+/g, '/');
  return normalized.length > 1 && normalized.endsWith('/')
    ? normalized.slice(0, -1)
    : normalized;
}

export function getAncestorPaths(path) {
  const normalized = normalizePath(path);

  if (normalized === '/') {
    return ['/'];
  }

  const segments = normalized.split('/').filter(Boolean);
  const result = [];
  let current = '';

  segments.forEach(function addSegment(segment) {
    current += `/${segment}`;
    result.push(current);
  });

  return ['/'].concat(result);
}
