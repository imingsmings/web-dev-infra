const { v5 : port } = require('../config/port')
const { Application } = require('../lib')

Application.create('v5', port)