exports.handler = function(event, context, callback) {
    const { queryStringParameters } = event;
    console.log(queryStringParameters);
}
