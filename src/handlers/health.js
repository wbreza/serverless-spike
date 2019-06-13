const middlewares = require('../middleware/config')();
const app = require('../middleware/app');

module.exports.handler = app.use(middlewares, ({ req, res }) => {
    console.log("Executing Health handler...");
    res.status = 200;
    res.body = `OK @ ${new Date()}`;
});