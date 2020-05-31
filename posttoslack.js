var https = require("https");
exports.posttoslack = function(hostname, path, msg){

    return new Promise((resolve, reject) => {

        var options = {
            "method": "POST",
            "hostname": hostname,
            "path": path,
            "headers": {
                "Content-Type": "application/json"
            }
        };


        var req = https.request(options, (res) => {
            resolve('Success');
        });


        req.on('error', (e) => {
            reject(e.message);
        });


        // send the request
        req.write(JSON.stringify({ text: msg }));
        req.end();
    })
}