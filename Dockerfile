FROM node
ENV NODE_ENV=production

RUN npm install

COPY ["package.json", "static"]

CMD [ "npm start" ]
