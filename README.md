# Rogue-Tinoite
Tinoite but it's gone rogue

## Install:

#### First, install the dependencies:
```bash
~$ npm install
```


#### Start the Postgre service, if you're using arch linux, just run: 
```bash
~$ systemctl start postgresql.service
```
#### Then, create a user. If you don't want to tweak up the config files, create a user named 'me' with:

 ```bash
~$ psql postgres
~$ CREATE ROLE me WITH LOGIN PASSWORD 'password';`
~$ ALTER ROLE me CREATEDB;`
 ```
#### Go to the root folder and run the DB Migrations.
 ```bash
~$ npx sequelize db:create
~$ npx sequelize db:migrate
 ```
#### Run the server:
 ```bash
~$ npx nodemon src/server.js
 ```
