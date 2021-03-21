# Farmer App

This is a sample app used to test and apply best practices on Web development.

This app was built using last version of Angular using Angular Material and PWA packages.

## How to run

### Running with Docker Compose

```sh
# Download images to avoid auto build
docker-compose pull

# Start API and Web applications
docker-compose up -d 

# Build image from source and start applications
docker-compose up --build -d
```

### Running from source code

```sh
# First install dependencies
yarn install

# Run API service
yarn start api

# Run web app
yarn start farmer
```

Now just access [http://localhost:4200](http://localhost:4200) and test it

## How to test

```sh
# Testing API app
yarn test api

# Testing UI lib
yarn test ui

# Testing WEB app
yarn test farmer

# End-to-End test
yarn e2e
```
