param env string
param image string
param name string
param lastUpdated string = utcNow('u')
param openApiSpec string = loadTextContent('openapi.json')
param onlyDeployCode string = 'false'

var config = {
  prod: {
    NODE_ENV: 'production'
  }
  dev: {
    NODE_ENV: 'development'
  }
  qa: {
    NODE_ENV: 'qa'
  }
}

module api 'br:coolerscreens.azurecr.io/bicep/modules/csi-api:20221027.3' = {
  name: '${name}-service-${uniqueString(lastUpdated)}'
  params: {
    env: env
    image: image
    name: name
    apiPath: apiPath
    openApiJsonSpec: openApiSpec
    config: config[env]
  }
}
