FROM node
ENV NODE_ENV=production

WORKDIR /src

COPY ["package.json", "./"]

RUN npm install -g npm@8.0.0

COPY . .

CMD [ "node", "index.js" ]
