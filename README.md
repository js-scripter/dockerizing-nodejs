# dockerizing-nodejs

A node js application which runs in Docker container.
and connects to the PostgreSQL DB which runs in Docker container as well.

Following instructions are in the context of Linux (debian based)
Please refer respective guides of Docker and Node.js for other OS.

## How to run
### with docker
-	Make sure you have Docker installed - [get Docker](https://docs.docker.com/get-docker/)

- 	To get the app source - `git clone the repo`

-	To get the PostgreSQL docker image run command  `sudo docker pull postgres`

-	To start PostgreSQL DB in Docker run command  `sudo docker run -i -e POSTGRES_PASSWORD=pg --name pg_container postgres`

-	In seperate terminal window/tab run command  `sudo docker exec -it pg_container bash`

-	To access database in new terminal tab run command -> `root@35b5d78742b0:/# psql -U postgres`

-	To create database run command `postgres=# CREATE DATABASE ums;`

-	To connect to ums database run  `postgres=# \c ums`

-	To create table run SQL as follows

>postgres=# CREATE TABLE users(
   id serial PRIMARY KEY,
   name VARCHAR (255) NOT NULL,
   twitter_link VARCHAR (255) ,
   linkedin_url VARCHAR (255) ,	
   blog_URL VARCHAR (255) ,	
   password VARCHAR(20) NOT NULL,
   email VARCHAR(50) NOT NULL
);

-	Insert some data into the table
>postgres=# insert into users(name,twitter_link,password,email) values('test user','twitter.com/testuser','1234','test-user@gmail.com');

-	Check the records by running below SQL
>postgres=# select * from users;

Now you are done with database part. Let's move on to Node server part as shown here.

-	Make sure in new terminal you are at the root of the Node application

-	Run the command - `sudo docker build -t node_image .` Once the script finish you get  confirmation as follows
>Successfully built 028dab5f68fe Successfully tagged node_image:latest

-	Start Docker container for Node application in new terminal by running below command.
>sudo docker run --publish 8000:8080 --env dbuser=postgres --env dbhost=database --env database=ums --env dbpassword=pg --env dbport=5432 --name=node_container --link=pg_container:database --interactive node_image /bin/bash

-	In new terminal window/tab run the command as shown below
>sudo docker exec -it node_container node /usr/src/app/app.js

-	Now open the application in browser `http://localhost:8000/`