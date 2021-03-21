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
RUN yarn build farmer --output-path=./dist/out --configuration $configuration

##################
### production ###
##################
FROM nginx:alpine

RUN apk update; \
  apk --no-cache add ca-certificates; \
  apk --no-cache add tzdata; \
  cp /usr/share/zoneinfo/America/Fortaleza /etc/localtime; \
  echo "America/Fortaleza" > /etc/timezone; \
  apk del tzdata

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

## Copy builded app
COPY --from=builder /app/dist/out/ /usr/share/nginx/html

EXPOSE 80

## Start Nginx service
CMD ["nginx", "-g", "daemon off;"]
