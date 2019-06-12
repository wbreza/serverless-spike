const createRequest = require('./cloudRequest');
const createResponse = require('./cloudResponse');

class App {
  constructor(middlewares) {
    this.middlewares = middlewares;
    this.use = this.use.bind(this);
  }

  async use(args, handler) {
    var req = createRequest(args);
    var res = createResponse(args);

    var context = { req, res };

    const next = () => {
      const middleware = this.middlewares.pop();
      if (middleware) {
        await middleware(context, next);
      } else {
        await handler(context);
      }
    }

    await next(null);

    return res.result();
  }
}

module.exports = (middlewares) => new App(middlewares);