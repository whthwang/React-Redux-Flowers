const express = require('express');
const path = require('path');
const db = require('../database/model');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => { console.log(`server is running on port ${port}`) });
