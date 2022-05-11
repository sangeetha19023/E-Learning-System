const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const apiRoutes = require('./routes/api');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRoutes);
app.listen(8080);