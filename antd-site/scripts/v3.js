const { v3 : port } = require('../config/port')
const { Application } = require('../lib')

Application.create('v3', port)