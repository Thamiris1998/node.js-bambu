const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require('./controller/recipesController')(app);

app.listen(3000);