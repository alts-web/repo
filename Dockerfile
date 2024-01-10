FROM node
ENV NODE_ENV=production

CMD [ "npm install" ]

COPY ["package.json", "static"]

CMD [ "npm start" ]
