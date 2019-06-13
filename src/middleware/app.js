const createRequest = require('./cloudRequest');
const createResponse = require('./cloudResponse');

module.exports = {
  use: (middlewares, handler) => {
    return async (...args) => {
      var req = createRequest(args);
      var res = createResponse(args);
      var context = { req, res };

      let index = 0;

      const next = () => {
        let result = null;

        const middleware = middlewares[index];
        if (middleware) {
          index++;
          result = middleware(context, next);
        } else {
          result = handler(context);
        }

        if (result && result.then) {
          return result;
        }

        return Promise.resolve();
      }

      await next();
      res.send();
    };
  }
};