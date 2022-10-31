const express = require('express')
const mongoose = require('mongoose')


const DB_USER = 'root'
const DB_PASSWORD = 'example'
const DB_HOST = 'localhost'
const DB_POST = 27017
const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_POST}`
mongoose.connect(URL).then((info)=> console.log('DB is connect',info))
.catch((error)=>{
    return console.log('db is not connect with server',error)
})





const app = express()


require('dotenv').config()




app.get('*', (req,res)=> res.status(200).send('new nidddd... change.....'))
// server {
//     listen 8080;
//     location / {
//       proxy_set_header Host $host;
//       proxy_set_header X-Real-IP $remote_addr;
//       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
//       proxy_set_header X-Forwarded-Proto $scheme;
//       proxy_pass http://express-node-app:4000;
//     }
//   }

// version: '3'
// services:
//   node-app:
//    container_name: express-node-app
//    build: .
//    volumes:
//    - ./src:/app/src:ro
//    ports: 
//    - '4000:4000'
//   mongo:
//     image: mongo
//     restart: always
//     environment:
//       MONGO_INITDB_ROOT_USERNAME: root
//       MONGO_INITDB_ROOT_PASSWORD: example
//   nginx:
//    image: nginx
//    ports:
//     - "8080:8080"
//    volumes:
//     - ./nginx/default.conf:/etc/nginx/conf.d/default.conf
//    depends_on:
//     - node-app


// FROM node:16
// COPY package.json .
// WORKDIR /app
// RUN npm install
// COPY . .
// EXPOSE 4000
// CMD [ "npm", "start" ]


  

app.listen(process.env.PORT || 4000,()=> console.log('app is runs'))