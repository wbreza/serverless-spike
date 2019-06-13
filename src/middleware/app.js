const createRequest = require('./cloudRequest');
const createResponse = require('./cloudResponse');

module.exports = {
  use: (middlewares, handler) => {
    return async (...args) => {
      var req = createRequest(args);
      var res = createResponse(args);
      var context = { req, res };

      let index = 0;

      const next = async () => {
        const middleware = middlewares[index];
        if (middleware) {
          index++;
          await middleware(context, next);
        } else {
          await handler(context);
        }
      }

      await next();
      res.send();
    };
  }
};