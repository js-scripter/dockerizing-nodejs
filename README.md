# dockerizing-nodejs

A node js application which runs in Docker container.
Connects to the PostgreSQL DB which is also running in Docker container.

## How to run
### `git clone the repo`
### `npm install`
## in seperate terminal run postgreSQL in docker using command
###    `sudo docker run -i -p 5431:5432 -e POSTGRES_PASSWORD=pg --name pg1 postgres`
## Run command as below to create DB in Docker
###    `npm run createdb`
## Run below command to start run the migration and the application after that
###    `npm start`