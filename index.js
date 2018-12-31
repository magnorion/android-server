const express = require('express'),
consign = require('consign'),
bodyParser = require('body-parser'),
port = process.env.PORT || 3000,
routes = require('./app/routes'),
app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

consign({cwd: 'app'})
    .include('models')
    .then('controllers')
    .into(app);

// Sistema de rotas
routes(app);

app.listen(port, () => console.log(`Server running at ${port}`));
