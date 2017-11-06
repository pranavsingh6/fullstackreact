import config, {nodeEnv,logstar} from  './config';
import https from 'https';
import http from 'http';
import express from 'express';
import fs from 'fs';
import apiRouter from './api'

const server=express();
// const server = http.createServer();
// server.on('request',(req,res)=>{
//    res.write('Hello  http\n');
//    setTimeout(()=>{
//    	res.write('I am timeout\n');
//    	res.end();
//    },2000);
// });
// https.get('https://www.lynda.com',res=>{
// 	console.log('request status code',res.statusCode);
// 	let n=0;
// 	res.on('data',chunk=>{
// 		console.log('these many times',n);
// 		n++;
// 	});
// });

server.use('/api',apiRouter);
server.use(express.static('public'));

server.get('/',(req,res)=>{
	res.send('received the requ est\n');
	res.end();
});
// server.get('/help',(req,res)=>{
// 	fs.readFile('./config.js',(error,data)=>{
// 		res.send(data.toString());
// 	})
// });

server.listen(config.port,()=>{
	console.info('server listen on:',config.port);
});






//console.log(logstar('Function'));