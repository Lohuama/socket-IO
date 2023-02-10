const express = require('express')
const path = require('path')
const app = express();
const http = require('http')
const socketIO = require('socket.io')

app.use('/', express.static(path.join(__dirname, 'public')));

// app.listen(3000, () => {
//     console.log('run')
// })

const server = http.Server(app)
server.listen(300,()=>{
    console.log('run')
})

const io = socketIO(server)