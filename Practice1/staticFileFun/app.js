const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use((req, res, next) => {
  console.log('Request IP: ' + req.url);
  console.log('Request Date: ' + new Date());
  next();
});

// app.use((req, res, next) => {
//   const filepath = path.join(__dirname, "static", req.url);
//   fs.exists(filepath, (exists) => {
//     if (exists) {
//       res.sendFile(filepath);
//     } else {
//       next();
//     }
//   });
// });

app.get('/user/:userid', (req, res) => {
  res.send('Welcome to the Admin Dashboard!');
});

const staticpath = path.join(__dirname, 'static');
app.use(express.static(staticpath));

app.use((req, res) => {
  res.status(404).send('File not found');
});

app.listen(3000, () => {
  console.log('App started on port 3000');
});
