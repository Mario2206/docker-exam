FROM node
WORKDIR /app
COPY package.json .
RUN ["npm", "install"]
ENTRYPOINT [ "node", "index.js" ]
