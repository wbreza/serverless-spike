module.exports = (options) => async (context, next) => {
  console.log("Started request");
  await next(err);
  console.log("Finished request");
};