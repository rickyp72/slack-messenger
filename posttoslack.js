"use strict"

let https = require("https");
exports.posttoslack = function(hostname, path, msg){

    return new Promise((resolve, reject) => {

        let options = {
            "method": "POST",
            "hostname": hostname,
            "path": path,
            "headers": {
                "Content-Type": "application/json"
            }
        };


        let req = https.request(options, (res) => {
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