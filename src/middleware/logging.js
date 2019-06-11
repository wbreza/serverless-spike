module.exports = (options) => (err, req, res, next) => {
  console.log("Started request");
  next(err);
  console.log("Finished request");
};