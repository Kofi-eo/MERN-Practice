// EXPRESS

// creating express server

const express = require('express');
const path = require('path');
const { send } = require('process');

const app = express();

const port = 3000;
console.log('We are restarting..');

//makes the whole directory accessible
app.use(express.static(path.join(__dirname, '../frontend')));

//whenever the / route is called, it sends file Index.html to the browser
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../frontend/Index.html'));
});

//listen for connection, in this case listens for port 3000, if true runs the callback function
app.listen(port, () => {
  console.log(`Express Server Listening on port ${port}`);
});

//MIDDLEWARES
//syntax>> app.use(callback)
//app.use(path,callback) = only when path is accurate
