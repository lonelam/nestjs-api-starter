FROM mhart/alpine-node:latest
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
COPY ["dist", "dist"]
COPY ["node_modules", "node_modules"]
RUN yarn install
CMD yarn start:prod