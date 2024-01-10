FROM node
ENV NODE_ENV=production

COPY ["package.json", "static"]

RUN npm start

COPY . .

CMD [ "npm start" ]
