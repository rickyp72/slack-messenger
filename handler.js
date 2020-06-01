"use strict"
const pts = require('./posttoslack.js')
const secret = require('./getSecret.js')

exports.handler = async (event) => {
    let webhook;
    if ( event.webhook.startsWith("/services/") ) {
        webhook = event.webhook // use plaintext webhook for testing
        console.log("WEBHOOK: " + webhook)
        console.log("TRUE")
    } else {
        let myHook = await secret.getSecret(event.webhook)
        let jsonData = JSON.parse(myHook);
        console.log("MYHOOK AS JSON: " + jsonData.hookPath)

        webhook = jsonData.hookPath;     // use secret manager
        console.log("WEBHOOK: " + webhook)
        console.log("FALSE")
    }
    let slackmsg = event.report;
    return pts.posttoslack("hooks.slack.com", webhook, slackmsg);
};

