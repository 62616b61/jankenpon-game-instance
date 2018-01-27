FROM node:9.4.0-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . /app
RUN yarn --pure-lockfile
RUN yarn build

RUN rm -rf source

EXPOSE 3000

CMD ["yarn", "start"]
