const countMatchingRequests = (requests, fragment) => {
  return requests.filter((request) => {
    return request.url.includes(fragment);
  }).length;
};

module.exports = {
  countMatchingRequests
};
