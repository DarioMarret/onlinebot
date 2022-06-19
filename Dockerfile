FROM node:16.14.0

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

RUN npm install -g npm@latest
# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start