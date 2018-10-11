//create new express app
// app.listen to start up

const path = require('path');
const publicPath = path.join(__dirname,'../public');
const port =process.env.PORT || 3000;
const socketIO = require('socket.io');
const http = require('http');

const express = require('express');



var app = express();
var server =http.createServer(app);
var io =socketIO(server);

io.on('connection',(socket)=>{
    console.log('new user connected!!!');

    socket.on('disconnect',()=>{
        console.log('new user disconnected!')
    });
});




app.use(express.static(publicPath));
server.listen(port,()=>{
    console.log(`Server is up on port ${port}!!!`)
});

