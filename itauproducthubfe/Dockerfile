FROM node:20 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Imagem do Nginx
FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]