const pts = require('./posttoslack.js')
const secret = require('./getSecret.js')


exports.handler = async (event) => {
    // TODO implement
    
    // console.log(secret.getSecret('dev/nhs/slack/hookPath'))
    // let myHook = secret.getSecret('dev/nhs/slack/hookPath')
    // let myHook = secret.getSecret(event.webhook)
    // console.log("MYHOOK: " + myHook)

    let slackmsg = event.report;
    // let webhook = myHook;     // use secret manager
    let webhook = event.webhook // use plaintext webhook for testing
    console.log(webhook)
    return pts.posttoslack("hooks.slack.com", webhook, slackmsg);

};

