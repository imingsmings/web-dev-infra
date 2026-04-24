const path = require('path');

const dataRoot = path.resolve(__dirname, '..', 'data');
const storageMounts = {
  s3: {
    gnb: path.join(dataRoot, 'gnb'),
    gnb162: path.join(dataRoot, 'gnb162'),
    gnb1622: path.join(dataRoot, 'gnb1622')
  },
  ftp: {
    datang: path.join(dataRoot, 'datang'),
    omc: path.join(dataRoot, 'omc'),
    nebackup: path.join(dataRoot, 'nebackup')
  }
};

module.exports = {
  port: Number(process.env.PORT || 3100),
  mounts: storageMounts.s3,
  storageMounts
};
