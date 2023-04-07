# HOW TO INITIALIZE

Install packages and initialize yarn.lock
```
yarn 
```

Create a file called `.env` and write this inside
```
TOKEN=YOUR_BOTS_TOKEN
CLIENT_ID=YOUR_BOTS_ID
GUILD_ID=YOUR_BOTS_TESTING_GUILD
POSTGRES_DB=YOUR_POSTGRES_DB_NAME
POSTGRES_PORT=YOUR_POSTGRES_PORT
POSTGRES_PASSWORD=YOUR_POSTGRES_PASSWORD
```

## HOW TO START

For dev testing use
```
yarn dev
```

For compiling into javascript use
```
yarn build
```

For starting bot when in production use
```
yarn start
```