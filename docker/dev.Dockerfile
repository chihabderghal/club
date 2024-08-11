FROM node:22-alpine3.20 as base 

RUN apk add --no-cache bash 

COPY package.json .
COPY package-lock.json .

FROM base as modules 

WORKDIR /app

RUN npm install 

FROM modules as app 

WORKDIR /app

EXPOSE 3000

CMD [ "npm" , "run", "dev"]

