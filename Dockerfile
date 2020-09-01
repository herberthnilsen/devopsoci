FROM node:latest

COPY . .

RUN "npm install"

CMD [ "node /src/app.js" ]