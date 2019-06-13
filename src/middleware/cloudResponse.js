const AzureResponse = require('./azure/azureResponse');
const AwsResponse = require('./aws/awsResponse');

module.exports = (args) => {
  return args.length === 2 ? AzureResponse.create.apply(null, args) : new AwsResponse(args);
}