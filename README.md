# Configuration

```
firebase init functions --project PROJECT_ID_OR_ALIAS
firebase functions:config:set stripe.secret_key="YOUR_STRIPE_SECRET_KEY"
firebase deploy --only functions:config // likely not actuall necessary
gcloud auth application-default login // create ADC for use with auth (https://cloud.google.com/docs/authentication/provide-credentials-adc#local-dev)
```

For testing:
```
firebase functions:config:get > functions/.runtimeconfig.json // in functions dir
firebase emulators:start --only functions
```

When ready to deploy:
```
firebase deploy --only functions
```
