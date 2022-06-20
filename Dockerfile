FROM node:16.14.0 as dependencies
WORKDIR /onlinebot
COPY package.json package-lock.json ./

RUN npm i -g npm@latest

RUN npm i --force


FROM node:16.14.0 as builder
WORKDIR /onlinebot
COPY . .
COPY --from=dependencies /onlinebot/node_modules ./node_modules
RUN npm run build

FROM node:16.14.0 as runner
WORKDIR /onlinebot
ENV NODE_ENV production


COPY --from=builder /onlinebot/public ./public
COPY --from=builder /onlinebot/.next ./.next
COPY --from=builder /onlinebot/node_modules ./node_modules
COPY --from=builder /onlinebot/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]