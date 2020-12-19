FROM ubuntu:18.04

RUN apt-get update && apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn

RUN yarn global add strapi

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

WORKDIR /srv/app

COPY app/* /srv/app/
RUN yarn
RUN yarn build

CMD ["strapi", "develop"]