FROM node
ENV NODE_ENV=production

WORKDIR /static

COPY ["package.json", "index.js"]

RUN npm install -g npm@8.0.0

COPY . .

CMD [ "node", "index.js" ]
