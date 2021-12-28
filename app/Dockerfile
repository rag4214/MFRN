# --- Dependencies --- #
FROM node:16-alpine AS dependencies
WORKDIR /app

COPY package*.json ./

RUN npm ci

# --- Build --- #
FROM node:16-alpine AS build
WORKDIR /app

COPY . ./

COPY --from=dependencies /app/node_modules node_modules/

RUN npm run build

# --- Run --- #
FROM node:16-alpine AS run
WORKDIR /app

ENV NODE_ENV=production

COPY public/ public/
COPY next.config.js .
COPY package.json .

COPY --from=dependencies /app/node_modules/ node_modules/

COPY --from=build /app/.next/ .next/

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]