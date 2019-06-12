const config = require('../middleware/config');
const app = require('../middleware/app')(config());

module.exports.handler = app.use(arguments, async (context) => {
    context.res.body = "OK";
});