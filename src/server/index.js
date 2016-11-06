/**
 * Server Entry File
 */

 import express from 'express';
 import io from 'engine.io';
 import http from 'http';

process.chdir(__dirname)

express()
    .use(express.static('./static'))
    .use(express.static('../static'))
    .get('*', (req, res) => {
        res.type('html').end(template('Loading...'))
    })
    .listen(8888, () => console.log('App is listening on http://localhost:8888/'));


// io.attach(http.createServer().listen(8888)).on('connection',function(socket){
//   socket.on('message',function(data){})
//   socket.on('close',function(){})
// });

var server = new io.Server();
server.on('connection',function(socket){
  socket.send('hi!');
});
// httpServer.on('upgrade', function(req, socket, head){
//   server.handleUpgrade(req, socket, head);
// });
// httpServer.on('request', function(req, res){
//   server.handleRequest(req, res);
// });


function template (body = '') {
return `
<!DOCTYPE html>
<html>
<head>
    <title>Fullstack Challenge</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/normalize.css" rel="stylesheet">
</head>
<body>
</body>
    <div id='app'>${body}</div>
    <script src="/client.js"></script>
    </html>
`
}
