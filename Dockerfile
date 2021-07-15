FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:alpine
WORKDIR /app
COPY --from=build /app /app
EXPOSE 80
RUN apk add dumb-init
USER node
CMD ["dumb-init", "node", "app.js"]
