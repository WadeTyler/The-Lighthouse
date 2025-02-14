FROM node:18-slim

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5022

CMD npm run start