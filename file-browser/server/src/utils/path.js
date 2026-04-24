const path = require('path');

function normalizeVirtualPath(inputPath) {
  if (!inputPath || inputPath === '/') {
    return '/';
  }

  const normalized = `/${inputPath}`.replace(/\/+/g, '/');
  return normalized.length > 1 && normalized.endsWith('/')
    ? normalized.slice(0, -1)
    : normalized;
}

function resolveMountedPath(mountPath, virtualPath) {
  const normalizedPath = normalizeVirtualPath(virtualPath);
  const resolvedMountPath = path.resolve(mountPath);
  const relativePath = normalizedPath === '/' ? '.' : `.${normalizedPath}`;
  const resolvedTargetPath = path.resolve(resolvedMountPath, relativePath);

  if (
    resolvedTargetPath !== resolvedMountPath &&
    !resolvedTargetPath.startsWith(`${resolvedMountPath}${path.sep}`)
  ) {
    const error = new Error('Path escapes mounted directory.');
    error.statusCode = 400;
    throw error;
  }

  return {
    normalizedPath,
    resolvedMountPath,
    resolvedTargetPath
  };
}

module.exports = {
  normalizeVirtualPath,
  resolveMountedPath
};
