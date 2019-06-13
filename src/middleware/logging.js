module.exports = (options) => async (context, next) => {
  // Example of performing an action before and after the handler is called
  console.log("Started request");
  return await next();
  console.log("Finished request");
};