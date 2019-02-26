exports.handler = function(event, context, callback) {
    const { url } = event.queryStringParameters;

    // Store page view in your DB

    const response = {
        statusCode: 301,
        headers: {
            Location: url,
        }
    };

    return callback(null, response);
}
