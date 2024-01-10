FROM node
ENV NODE_ENV=production

WORKDIR /app

RUN npm install

COPY ["package.json", "static"]

CMD [ "npm start" ]
