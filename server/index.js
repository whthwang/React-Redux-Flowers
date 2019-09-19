const express = require('express');
const path = require('path');
const db = require('../database/model');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

//GET route for all users in the database
app.get('/api/users', (req, res) => {
  db.find({})
    .then((allUsers) => {
      res.status(200).send(allUsers);
    })
    .catch((error) => {
      res.status(404).send(`GET to /api/users failed: ${error}`);
    });
});

app.listen(port, () => { console.log(`server is running on port ${port}`) });
