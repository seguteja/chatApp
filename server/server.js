const path=require('path');
const http=require('http')
const express=require('express');
const socketIO=require('socket.io');


const publicPath=path.join(__dirname,'/../public');
const port=process.env.PORT || 9999;
const app=express();

let server=http.createServer(app);
let io=socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
console.log("a new user just connected")

socket.on('disconnect',(socket)=>{
    console.log("a new user  disconnected")
    });
});



server.listen(port,()=>{
    console.log(`server is started on ${port}`);
});