FROM node:16.15.1-bullseye-slim
WORKDIR /code
CMD ["npm", "start"]

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
