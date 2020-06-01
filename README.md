*config/infra/cloudformation not used in this project just here for future reference.





 npm i serverless-pseudo-parameters --save




sls deploy -v

sls logs -f slack -t
 
sls invoke -f slack --path mocks/slack-webhook-event.json
 
sls invoke -f slack --path mocks/slack-secretmanager-event.json
 