class AzureResponse {
  constructor(context) {
    this.context = context;

    this.headers = {};
    this.body = null;
    this.status = 200;
  }

  send() {
    this.context.res = {
      status: this.status,
      body: this.body,
    };

    console.log("Sent response");
  }
}

AzureResponse.create = (context) => new AzureResponse(context);

module.exports = AzureResponse;