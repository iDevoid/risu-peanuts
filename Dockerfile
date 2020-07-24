FROM node:14

RUN npm install -g http-server

WORKDIR /usr/src/app

# copy dependecies files
COPY package*.json ./

# npm install
RUN npm install

# copy the code to the container
COPY . .

# build the app
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
