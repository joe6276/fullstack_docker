FROM node as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


# STAGE 2

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g" , "daemon off;" ]


# In prod there is no server:

   # 1st Create the files to be rendered by the server
   # 2nd Render them using a server 


   # docker run -p 80:80 --it  frontend