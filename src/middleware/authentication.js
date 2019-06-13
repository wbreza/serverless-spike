module.exports = (options) => (context, next) => {
  // Example of short circuiting the pipeline if required
  // Auth failure will not call next and therefore the handler code is never executed
  if (!context.req.headers.authorization) {
    context.res.status = 401;
    context.res.body = "Authentication required!";
  } else {
    return next();
  }
}