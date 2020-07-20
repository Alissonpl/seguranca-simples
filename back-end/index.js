const express = require('express');
const helmet = require('helmet');
const http = require('http'); //talves precise instalar
const cors = require('cors');
const bodyParser = require('body-parser');

const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const routes = require('./src/routes');

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(cors());
 
app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.use(routes);


const server = http.createServer(app); 
server.listen(3000);
console.log("Servidor escutando na porta 3000...");

//utilziar try e cath nas rotas e nos entrdas post e get 