FROM node
ENV NODE_ENV=production

RUN npm -v

COPY ["package.json", "static"]

CMD [ "node src/index.js", "npm start"]
