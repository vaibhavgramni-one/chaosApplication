FROM node:12

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["node" , "app.js"]
