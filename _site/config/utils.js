const interfaces = require('os').networkInterfaces();
const appPorts = require('./config.json')

function getLocalAddress() {
    for(const devName in interfaces){  
      const iface = interfaces[devName];  
      for(let i = 0 ; i < iface.length; i++){  
            const alias = iface[i];  
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
                  return alias.address
            }  
      }  
    }
}

function getAppPorts() {
  return appPorts.reduce(function(prev, current) {
    prev[current.appName] = current.port
    return prev
  }, {})
}

module.exports = {
    getLocalAddress,
    getAppPorts
}