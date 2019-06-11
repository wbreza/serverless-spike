module.exports = (options) => (err, req, res, next) => {
  try {
    next();
  } catch (e) {
    console.log("Exception handled");
    console.log(e);
    next(e);
  }
}