# dockerizing-nodejs

A node js application which runs in Docker container.
Connects to the PostgreSQL DB which is also running in Docker container.

# How to run
1. `git clone the repo`
2. `npm install`
3. in seperate terminla run postgreSQL in docker using below command
    `sudo docker run -i -p 5431:5432 -e POSTGRES_PASSWORD=pg --name pg1 postgres`
4. Run command as below to create DB in Docker
    `npm run createdb`
5. Run below command to start run the migration and the application after that
    `npm start`