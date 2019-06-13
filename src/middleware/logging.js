module.exports = (options) => async (context, next) => {
  console.log("Started request");
  await next();
  console.log("Finished request");
};