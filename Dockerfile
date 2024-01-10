FROM node
ENV NODE_ENV=production

COPY ["package.json", "static"]

COPY . .

CMD [ "npm start" ]
