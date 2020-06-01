*config/infra/cloudformation not used in this project just here for future reference.

create secret manager secrets:

sm/path/<workspace_owner>/<maybe_name_of_channel>

"hookPath": "/services/<webhook id / secret>"



 `npm i serverless-pseudo-parameters --save`



```bash
sls deploy -v

sls logs -f slack -t
 
sls invoke -f slack -p mocks/slack-webhook-event.json
 
sls invoke -f slack -p mocks/slack-secretmanage-event.json
 ```