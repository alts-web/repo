FROM node:iron-bookworm-slim
ENV NODE_ENV=production

COPY ["package.json", "static"]

RUN npm install
RUN npm start

COPY . .

CMD [ "node", "index.js" ]
