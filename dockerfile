FROM node:8.12.0

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install
RUN npm install --save mdbreact react-router-dom