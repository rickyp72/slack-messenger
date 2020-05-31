sls deploy -v

sls logs -f slack -t
 
sls invoke -f slack --path mocks/slack-webhook-event.json
 
sls invoke -f slack --path mocks/slack-secretmanager-event.json
 