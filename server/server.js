const express = require('express');
const server = express();
const path = require ('path');
const port = 8080;
const route= require('./route.js');
const sequelize = require('./sequelize.js');


server.set('views', path.join(__dirname, "views"));
server.set('view engine', 'pug');
server.use('/',express.static('public'));
server.use(express.urlencoded({extended:false}));

server.use('/',route);

 sequelize.authenticate()
	.then(() =>{
		//console.log('ok');
		server.listen(port);

		sequelize.sync()
		.then(() =>{
			console.log('alright');
		})
		.catch((err) =>{
			console.log("model didnt sync",err);
		});

	})
	.catch((err) => {
			console.log('didnt work');
		});
