FROM node
ENV NODE_ENV=production

COPY ["package.json", "static"]

CMD [ "npm start" ]
