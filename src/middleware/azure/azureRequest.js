class AzureRequest {
  constructor(context, req) {
    Object.assign(this, req);
  }
}

AzureRequest.create = (context, req) => new AzureRequest(context, req);

module.exports = AzureRequest;