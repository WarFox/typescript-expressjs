FROM node:12.19.0-alpine

WORKDIR /usr/src/app

ADD . /usr/src/app

RUN npm ci && \
  npm run build

EXPOSE 3000

CMD [ "npm", "start"]
