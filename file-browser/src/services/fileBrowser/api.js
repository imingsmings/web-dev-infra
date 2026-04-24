export function buildStorageApi(protocol) {
  return {
    roots: {
      method: 'GET',
      path: `/uem5000/log/mt/storage/buckets/${protocol}`,
      description: 'Fetch available storage buckets.'
    },
    list: {
      method: 'GET',
      path: `/uem5000/log/mt/storage/bucket/${protocol}`,
      description: 'Fetch bucket objects by prefix.'
    },
    download: {
      method: 'GET',
      path: `/uem5000/log/mt/storage/download/${protocol}`,
      description: 'Download a file by bucket and path.'
    },
    batchDownload: {
      method: 'POST',
      path: `/uem5000/log/mt/storage/batchDownload/${protocol}`,
      description: 'Download multiple files or directories as a zip archive.'
    }
  };
}
