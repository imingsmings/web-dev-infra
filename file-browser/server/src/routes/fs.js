const express = require('express');
const controller = require('../controllers/fsController');

const router = express.Router();

router.get('/uem5000/log/mt/storage/buckets/:protocol', controller.getStorageBuckets);
router.get('/uem5000/log/mt/storage/bucket/:protocol/:bucketName', controller.getStorageBucketObjects);
router.get('/uem5000/log/mt/storage/download/:protocol/:bucketName', controller.downloadStorageObject);
router.post('/uem5000/log/mt/storage/batchDownload/:protocol/:bucketName', controller.batchDownloadStorageObjects);

module.exports = router;
