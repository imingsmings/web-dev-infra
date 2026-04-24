const fsService = require('../services/fsService');

async function getStorageBuckets(req, res) {
  const data = await fsService.listStorageBuckets(req.params.protocol);
  res.json(data);
}

async function getStorageBucketObjects(req, res) {
  const data = await fsService.listStorageBucketObjects(
    req.params.protocol,
    req.params.bucketName,
    req.query.prefix || '',
    req.query.condition || ''
  );
  res.json(data);
}

async function downloadStorageObject(req, res) {
  const file = await fsService.resolveStorageDownload(
    req.params.protocol,
    req.params.bucketName,
    req.query.key || req.query.path || '/'
  );
  res.download(file.absolutePath, file.fileName);
}

async function batchDownloadStorageObjects(req, res) {
  const payload = await fsService.createStorageBatchDownload(
    req.params.protocol,
    req.params.bucketName,
    Array.isArray(req.body) ? req.body : (req.body.paths || [])
  );

  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', `attachment; filename="${payload.fileName}"`);
  payload.archive.pipe(res);
  payload.archive.finalize();
}

module.exports = {
  batchDownloadStorageObjects,
  downloadStorageObject,
  getStorageBucketObjects,
  getStorageBuckets
};
