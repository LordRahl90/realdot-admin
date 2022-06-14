FROM node:lts-alpine AS builder

WORKDIR /app

COPY  ./ ./

RUN npm install

RUN npm run build


FROM httpd:alpine

COPY --from=builder ./app/dist/ /usr/local/apache2/htdocs/

EXPOSE 80