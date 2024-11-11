FROM node:alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]

# docker run --name postgres -e POSTGRES_PASSWORD=postgres1 -d --network movie -p 5432:5432 postgres
# docker run --name postgres-test -e POSTGRES_PASSWORD=password \
#     -p 5432:5432 -v postgres-data:/var/lib/postgresql/data \
#     -d postgres:latest
#docker exec -it postgres psql -U postgres

# Volumes are folders on your host machine hard drive which are mounted into containers.
# Volumes will persists container shutdown - re-starts, any data that was created when the container was running will be available
# whenever we restarts.
# Named Volumes
# Anonymous Volume
# Bind Mounts

# docker run --name postgres -e POSTGRES_PASSWORD=postgres1 -v pgdata:/var/lib/postgresql/data  -d --network movie -p 5432:5432 postgres
# docker run -p 4000:4000 --network movie --name moviec --rm -v 'C:\Users\Joe\Desktop\Docker\session3\backend:/app'  movies
#  docker run -p 4000:4000 --network movie --name moviec --rm -v '/app/node_modules'   -v 'C:\Users\Joe\Desktop\Docker\session3\backend:/app'  movies
