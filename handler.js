const pts = require('./posttoslack.js')
const secret = require('./getSecret.js')



exports.handler = async (event) => {
    // TODO implement
    console.log("EVENT WEBHOOK: " + event.webhook)
    let myHook = await secret.getSecret(event.webhook)

    var jsonData = JSON.parse(myHook);

    console.log("MYHOOK AS JSON: " + jsonData.hookPath)

    let slackmsg = event.report;
    let webhook = jsonData.hookPath;     // use secret manager
    // let webhook = event.webhook // use plaintext webhook for testing
    console.log("WEBHOOK: " + webhook)
    return pts.posttoslack("hooks.slack.com", webhook, slackmsg);

};

