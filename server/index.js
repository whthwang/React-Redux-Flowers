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

//GET route for user by ID
app.get('/api/users/:id', (req, res) => {
  let { id } = req.params;
  db.find({ id })
  .then((user) => {
    res.status(200).send(user);
  })
  .catch((error) => {
    res.status(404).send(`GET user by ID failed: ${error}`);
  });
});

app.listen(port, () => { console.log(`server is running on port ${port}`) });
