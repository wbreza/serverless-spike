const AzureResponse = require('./azure/azureResponse');
const AwsResponse = require('./aws/awsResponse');

module.exports = (args) => {
  return args.length === 2 ? new AzureResponse(args) : new AwsResponse(args);
}