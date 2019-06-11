const createRequest = require('./cloudRequest');
const createResponse = require('./cloudResponse');

class App {
  constructor(middlewares) {
    this.middlewares = middlewares;
    this.use = this.use.bind(this);
  }

  use(args, handler) {
    var req = createRequest(args);
    var res = createResponse(args);

    const next = (err) => {
      const middleware = this.middlewares.pop();
      if (middleware) {
        middleware(err, req, res, next);
      }
    }

    next(null);
    handler(req, res);

    return res.result();
  }
}

module.exports = (middlewares) => new App(middlewares);