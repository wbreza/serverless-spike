const authentication = require('./authentication');
const logging = require('./logging');
const exceptionHandling = require('./exceptionHandling');

const middlewares = [logging(), exceptionHandling(), authentication()]

module.exports = (options) => middlewares;