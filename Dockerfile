FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
COPY prisma/ ./
RUN npm install
RUN npx prisma generate
COPY . .
EXPOSE 3000
CMD ["node", "src/server.js"]
