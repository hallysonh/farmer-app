#########################
### build environment ###
#########################
FROM node:12-alpine as builder

RUN apk update \
  && apk upgrade \
  && apk add --no-cache --virtual .build-deps alpine-sdk python

# set working directory
WORKDIR /app
COPY package.json yarn.lock /app/

## Install dependencies
RUN yarn install --frozen-lockfile --ignore-scripts

## Copy source code
COPY ./ /app/

## Build project
ARG configuration=production
RUN yarn build api --output-path=./dist/out --configuration $configuration

##################
### production ###
##################
FROM node:12-slim

RUN apt-get update; \
  apt-get install -y ca-certificates tzdata; \
  cp /usr/share/zoneinfo/America/Fortaleza /etc/localtime; \
  echo "America/Fortaleza" > /etc/timezone; \
  apt-get remove -y tzdata && apt autoremove -y

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --from=builder /app/package.json /app/yarn.lock ./

USER node

RUN yarn install --frozen-lockfile --no-cache --ignore-scripts --prod

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder --chown=node:node /app/dist/out ./

EXPOSE 3333

CMD [ "node", "main.js" ]
