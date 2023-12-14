const { mdn : port } = require('../config/port')
const { Application } = require('../lib')

Application.create('mdn', port)