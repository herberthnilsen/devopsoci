FROM node:latest

COPY . .

RUN npm install

EXPOSE 8080:8080


yrdyr

CMD [ "node", "./src/app.js" ]