


exports.getSecret = function (smpath) {
    console.log("SM PATH: " + smpath)
    // Load the AWS SDK
    var AWS = require('aws-sdk'),
        region = "eu-west-2",
        secretName = smpath,
        secret,
        jsonData,
        decodedBinarySecret;

// Create a Secrets Manager client
    var client = new AWS.SecretsManager({
        region: region
    });
    

    client.getSecretValue({SecretId: secretName}, function (err, data) {
        console.log("SecretName: " + secretName)
        if (err) {
            if (err.code === 'DecryptionFailureException')
                // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'InternalServiceErrorException')
                // An error occurred on the server side.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'InvalidParameterException')
                // You provided an invalid value for a parameter.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'InvalidRequestException')
                // You provided a parameter value that is not valid for the current state of the resource.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'ResourceNotFoundException')
                // We can't find the resource that you asked for.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
        } else {
            // Decrypts secret using the associated KMS CMK.
            // Depending on whether the secret is a string or binary, one of these fields will be populated.
            if ('SecretString' in data) {
                secret = data.SecretString;
            } else {
                let buff = new Buffer(data.SecretBinary, 'base64');
                decodedBinarySecret = buff.toString('ascii');
            }
        }

        // Your code goes here.
        console.log("SECRET INSIDE: " + secret)

        jsonData = JSON.parse(secret);
        console.log("JSONDATA: " + jsonData.hookPath)


    });
    console.log("OUTSIDE SECRET: " + jsonData)
    return jsonData
    // var jsonData = JSON.parse(secret)
    // return jsonData.hookPath;
}

