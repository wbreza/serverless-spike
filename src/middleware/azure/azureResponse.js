class AzureResponse {
  constructor(args) {
    Object.assign(this, args[0].res);
  }
}

module.exports = AzureResponse;