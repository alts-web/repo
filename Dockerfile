FROM node
ENV NODE_ENV=production

RUN npm install -g npm@8.0.0 

COPY ["package.json", "static"]

CMD ["npm", "start"]
CMD ["node src", "index.js"]
