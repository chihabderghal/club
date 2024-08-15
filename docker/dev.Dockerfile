FROM node:22-alpine3.20 AS base 
RUN apk add --no-cache bash 

FROM base AS modules 
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install 

FROM modules AS app 
WORKDIR /app
VOLUME [ "/app" ]
COPY --from=modules /app/node_modules ./node_modules
EXPOSE 3000
CMD [ "npm" , "run", "dev"]

