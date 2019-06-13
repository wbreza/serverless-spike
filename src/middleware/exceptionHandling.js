module.exports = (options) => (context, next) => {
  function logError(err) {
    console.log("Exception handled");
    console.log(err);
    context.res.status = 500;
    context.res.body = "Internal Server Error!";
  }

  try {
    return next().catch(logError);
  } catch (err) {
    logError(err);
  }
}