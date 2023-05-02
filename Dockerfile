FROM node:20-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git yarn python3 make g++  && \
    yarn global add gatsby-cli
EXPOSE 8000 9000