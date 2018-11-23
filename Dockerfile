FROM node:8.9.3-alpine
COPY ./app/package.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm install
COPY ./app/* /usr/src/app/
CMD node /usr/src/app/index.js
