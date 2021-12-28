# --- Dependencies --- #
FROM node:16-alpine AS dependencies
WORKDIR /api

COPY package*.json ./

RUN npm ci

# --- Build --- #
FROM node:16-alpine AS build
WORKDIR /api

COPY . ./

COPY --from=dependencies /api/node_modules/ node_modules/

RUN npm run build

# --- Run --- #
FROM node:16-alpine AS run
WORKDIR /api

ENV NODE_ENV=production

COPY --from=dependencies /api/node_modules/ node_modules/

COPY --from=build /api/dist/ dist/

EXPOSE 3000
CMD ["node", "dist/index.js"]