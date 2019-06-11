const logging = require('./logging');
const exceptionHandling = require('./exceptionHandling');

const middlewares = [logging(), exceptionHandling()]

module.exports = (options) => middlewares;