FROM node:iron-bookworm-slim
ENV NODE_ENV=production

COPY ["package.json", "static"]

RUN npm install

COPY . .

CMD [ "npm start" ]
