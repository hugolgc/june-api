FROM node:20.18

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

EXPOSE 8000

CMD ["node", "dist/main"]

# NO ENVIRONMENT VARIABLES