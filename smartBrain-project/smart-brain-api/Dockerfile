## use node image from docker
FROM node:10.16.1

## tells docker what to run
CMD ["/bin/bash"]

## build command
## docker build -t [containername] .

## running docker
## docker run -it [containername]

## running docker in the background
## docker run -it -d [containername]

## accessing docker image that's running in the background
## docker exec -it [containerid] bash

## see the containers that are running
## docker ps

## stopping docker image
## docker stop [containerid]

WORKDIR /usr/src/smart-brain-api

COPY ./ ./

RUN npm install

## determining the port number
## docker run -it -p 3000:3000 [containername]

## run it in background
## docker-compose up -d

## go into running docker container
# docker-compose exec [containername] bash