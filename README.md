# JokiAkun

npx sequelize-cli model:generate --name Joki --attributes name:string,age:integer,phone:string,address:string,image:string,status:string

npx sequelize-cli model:generate --name Akun --attributes name:string,gameID:string,server:string,phone:string

npx sequelize-cli model:generate --name Jam --attributes sesi:integer,jam:integer

npx sequelize-cli model:generate --name Jadwal --attributes JokiId:integer,AkunId:integer,JamId:integer