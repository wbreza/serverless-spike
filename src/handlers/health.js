const middlewares = require('../middleware/config')();
const app = require('../middleware/app');

module.exports.handler = app.use(middlewares, (context) => {
    console.log("Executing Health handler...");
    context.res.status = 200;
    context.res.body = `OK @ ${new Date()}`;
});