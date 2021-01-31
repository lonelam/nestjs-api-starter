FROM mhart/alpine-node:latest
ENV NODE_ENV=production
WORKDIR /app
EXPOSE 3000
COPY ["package.json", "yarn.lock", "./"]
COPY ["dist", "dist"]
RUN apk add --no-cache --virtual .build-deps make gcc g++ python3 \
    && yarn \
    && apk del .build-deps
CMD yarn start:prod