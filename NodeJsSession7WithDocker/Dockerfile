FROM node:alpine

WORKDIR /app/usr/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY index.js .

CMD ["npm", "start"]