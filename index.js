let express = require('express');
let path = require('path');
let ejs = require('ejs');
let app = express();
let router = require('./routes/router');

app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

let port = process.env.PORT || 8080;
app.listen(port);
