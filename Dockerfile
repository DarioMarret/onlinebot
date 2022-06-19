FROM node:alpine

# create & set working directory
WORKDIR /onlinebot

# copy source files
COPY . .

RUN npm install -g npm@latest
# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD ["npm" "run" "tart"]