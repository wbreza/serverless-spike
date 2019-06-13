const AzureRequest = require('./azure/azureRequest');
const AwsRequest = require('./aws/awsRequest');

module.exports = (args) => {
  return args.length === 2 ? AzureRequest.create.apply(null, args) : new AwsRequest();
}