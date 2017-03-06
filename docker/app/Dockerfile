FROM node:7.7

MAINTAINER teanoon anticipationvu@gmail.com

RUN apt-get update && apt-get -y install git && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir /code && chown node:node /code

USER node
WORKDIR /code
