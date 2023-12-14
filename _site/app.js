const { app : port } = require('./config/port')
const { Application } = require('./lib')

Application.create('app', port)