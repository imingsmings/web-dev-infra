const interfaces = require('os').networkInterfaces();
const appPorts = require('./config.json')

function getLocalAddress() {
    for(var devName in interfaces){  
      var iface = interfaces[devName];  
      for(var i=0;i<iface.length;i++){  
            var alias = iface[i];  
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