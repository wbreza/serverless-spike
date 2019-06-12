module.exports = (options) => (context, next) => {
  try {
    await next();
  } catch (e) {
    console.log("Exception handled");
    console.log(e);
  }
}